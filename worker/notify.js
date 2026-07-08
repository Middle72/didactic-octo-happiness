const TWILIO_API_BASE = 'https://api.twilio.com/2010-04-01';

async function sendSms(env, to, body) {
  const url = `${TWILIO_API_BASE}/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
  const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      To: to,
      From: env.TWILIO_FROM_NUMBER,
      Body: body,
    }),
  });

  const data = await res.json();
  return { to, ok: res.ok, status: res.status, sid: data.sid, error: res.ok ? null : data.message };
}

export async function handleNotify(request, env) {
  const required = ['TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_FROM_NUMBER', 'FAMILY_PHONE_NUMBERS', 'NOTIFY_SECRET'];
  const missing = required.filter((key) => !env[key]);
  if (missing.length > 0) {
    return new Response(JSON.stringify({ error: `Server is missing required config: ${missing.join(', ')}` }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (request.headers.get('x-notify-secret') !== env.NOTIFY_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    });
  }

  let message;
  try {
    const payload = await request.json();
    message = payload.message;
  } catch {
    return new Response(JSON.stringify({ error: 'Expected JSON body: { "message": "..." }' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!message || typeof message !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing "message" string in request body.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const recipients = env.FAMILY_PHONE_NUMBERS.split(',').map((n) => n.trim()).filter(Boolean);
  const results = await Promise.all(recipients.map((to) => sendSms(env, to, message)));

  const anyFailed = results.some((r) => !r.ok);
  return new Response(JSON.stringify({ results }), {
    status: anyFailed ? 502 : 200,
    headers: { 'content-type': 'application/json' },
  });
}
