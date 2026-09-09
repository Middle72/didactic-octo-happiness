const BASE_ID = 'apprSgTHj4HbR7IFB';
const TABLE_ID = 'tbl7FbKhHAu7SgIyj';

const INVENTORY_BASE_ID = 'appqixx7PevlX7ho8';
const INVENTORY_TABLE_ID = 'tbl1PF4Q09qToiDp9';
const CABINET_ID = 'CAB-01';
const SLOT_PATTERN = /^[A-D](0[1-6])$/;
const BIN_PATTERN = /^[A-D]$/;

async function handleCats(env) {
  if (!env.AIRTABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'Server is not configured with an Airtable API key.' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}?fields%5B%5D=Name&fields%5B%5D=Breed&fields%5B%5D=Photos&fields%5B%5D=Status&fields%5B%5D=Sex&fields%5B%5D=Age`;

  const airtableRes = await fetch(url, {
    headers: { Authorization: `Bearer ${env.AIRTABLE_API_KEY}` },
  });

  if (!airtableRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch cats from Airtable.' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  const data = await airtableRes.json();

  const cats = (data.records ?? [])
    .filter((record) => record.fields.Name)
    .map((record) => ({
      id: record.id,
      name: record.fields.Name ?? '',
      breed: record.fields.Breed ?? '',
      age: record.fields.Age ?? '',
      sex: record.fields.Sex?.name ?? '',
      status: record.fields.Status?.name ?? '',
      photoUrl: record.fields.Photos?.[0]?.thumbnails?.large?.url ?? record.fields.Photos?.[0]?.url ?? null,
    }));

  return new Response(JSON.stringify(cats), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=60',
    },
  });
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function inventoryHeaders(env) {
  return {
    Authorization: `Bearer ${env.AIRTABLE_INVENTORY_API_KEY}`,
    'content-type': 'application/json',
  };
}

async function fetchAllInventoryRecords(env) {
  const records = [];
  let offset;

  do {
    const url = new URL(`https://api.airtable.com/v0/${INVENTORY_BASE_ID}/${INVENTORY_TABLE_ID}`);
    if (offset) url.searchParams.set('offset', offset);

    const res = await fetch(url, { headers: inventoryHeaders(env) });
    if (!res.ok) throw new Error(`Airtable list failed: ${res.status}`);

    const data = await res.json();
    records.push(...(data.records ?? []));
    offset = data.offset;
  } while (offset);

  return records;
}

async function handleInventoryGet(env) {
  const records = await fetchAllInventoryRecords(env);

  const bySlot = {};
  for (const record of records) {
    const f = record.fields;
    if (!f.Slot || !f.Bin) continue;
    if (!bySlot[f.Slot]) bySlot[f.Slot] = { bins: [] };
    bySlot[f.Slot].bins.push({
      id: f.Bin,
      part: f.Part ?? '',
      qty: f.Qty ?? 0,
      min: f.Min ?? 0,
      distributor: f.Distributor ?? '',
      orderId: f.OrderId ?? '',
      unitCost: f.UnitCost ?? 0,
    });
  }
  for (const slot of Object.values(bySlot)) {
    slot.bins.sort((a, b) => a.id.localeCompare(b.id));
  }

  return jsonResponse(bySlot);
}

async function handleInventoryPost(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body.' }, 400);
  }

  const { slot, bin, part, qty, min, distributor, orderId, unitCost } = body;
  if (!SLOT_PATTERN.test(slot) || !BIN_PATTERN.test(bin)) {
    return jsonResponse({ error: 'Invalid slot or bin.' }, 400);
  }

  const binId = `${CABINET_ID}-${slot}-${bin}`;

  const airtableRes = await fetch(`https://api.airtable.com/v0/${INVENTORY_BASE_ID}/${INVENTORY_TABLE_ID}`, {
    method: 'PATCH',
    headers: inventoryHeaders(env),
    body: JSON.stringify({
      performUpsert: { fieldsToMergeOn: ['BinId'] },
      records: [
        {
          fields: {
            BinId: binId,
            Cabinet: CABINET_ID,
            Slot: slot,
            Bin: bin,
            Part: typeof part === 'string' ? part : '',
            Qty: Number(qty) || 0,
            Min: Number(min) || 0,
            Distributor: typeof distributor === 'string' ? distributor : '',
            OrderId: typeof orderId === 'string' ? orderId : '',
            UnitCost: Number(unitCost) || 0,
          },
        },
      ],
    }),
  });

  if (!airtableRes.ok) {
    return jsonResponse({ error: 'Failed to save bin to Airtable.' }, 502);
  }

  return jsonResponse({ ok: true });
}

async function handleInventoryDelete(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body.' }, 400);
  }

  const { slot, bin } = body;
  if (!SLOT_PATTERN.test(slot) || !BIN_PATTERN.test(bin)) {
    return jsonResponse({ error: 'Invalid slot or bin.' }, 400);
  }

  const binId = `${CABINET_ID}-${slot}-${bin}`;
  const formula = `{BinId}='${binId.replace(/'/g, "\\'")}'`;

  const lookupUrl = new URL(`https://api.airtable.com/v0/${INVENTORY_BASE_ID}/${INVENTORY_TABLE_ID}`);
  lookupUrl.searchParams.set('filterByFormula', formula);
  lookupUrl.searchParams.set('maxRecords', '1');

  const lookupRes = await fetch(lookupUrl, { headers: inventoryHeaders(env) });
  if (!lookupRes.ok) {
    return jsonResponse({ error: 'Failed to look up bin in Airtable.' }, 502);
  }
  const lookupData = await lookupRes.json();
  const record = lookupData.records?.[0];
  if (!record) {
    return jsonResponse({ ok: true });
  }

  const deleteUrl = new URL(`https://api.airtable.com/v0/${INVENTORY_BASE_ID}/${INVENTORY_TABLE_ID}`);
  deleteUrl.searchParams.set('records[]', record.id);

  const deleteRes = await fetch(deleteUrl, {
    method: 'DELETE',
    headers: inventoryHeaders(env),
  });
  if (!deleteRes.ok) {
    return jsonResponse({ error: 'Failed to delete bin from Airtable.' }, 502);
  }

  return jsonResponse({ ok: true });
}

async function handleInventory(request, env) {
  if (!env.AIRTABLE_INVENTORY_API_KEY) {
    return jsonResponse({ error: 'Server is not configured with an Airtable inventory API key.' }, 500);
  }

  try {
    if (request.method === 'GET') return await handleInventoryGet(env);
    if (request.method === 'POST') return await handleInventoryPost(request, env);
    if (request.method === 'DELETE') return await handleInventoryDelete(request, env);
  } catch (err) {
    return jsonResponse({ error: 'Unexpected error talking to Airtable.' }, 502);
  }

  return jsonResponse({ error: 'Method not allowed.' }, 405);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/cats') {
      return handleCats(env);
    }

    if (url.pathname === '/api/inventory') {
      return handleInventory(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
