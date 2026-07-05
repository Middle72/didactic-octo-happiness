const BASE_ID = 'apprSgTHj4HbR7IFB';
const TABLE_ID = 'tbl7FbKhHAu7SgIyj';

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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/cats') {
      return handleCats(env);
    }

    return env.ASSETS.fetch(request);
  },
};
