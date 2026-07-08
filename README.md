# bobbykelly.us — Lucky Penny Kitties

A static site for Lucky Penny Kitties, a foster-based cat rescue, built with
[Astro](https://astro.build) and deployed to Cloudflare Workers (via Workers
Builds — the git-connected deploy flow that runs a build then `wrangler
deploy`). The Adoptable Cats page loads live data from the "Lucky Penny
Kitties" Airtable base through the Worker, so the Airtable API key never
reaches the browser.

The Worker (`worker/index.js`) serves the built static site from `dist/`
(via the `ASSETS` binding configured in `wrangler.jsonc`) and additionally
handles `GET /api/cats` by calling the Airtable API server-side.

## Local development

```sh
npm install
npm run dev
```

The `/cats` page calls `/api/cats`, which only runs under the Worker. To test
it locally end-to-end (build + Worker) with Wrangler:

```sh
npm run build
npx wrangler dev --var AIRTABLE_API_KEY:<your-airtable-token>
```

## Deploying to Cloudflare (Workers Builds)

This repo is already wired up for the **Workers & Pages → Workers Builds**
git-connected flow (not classic Cloudflare Pages — there's no separate
"build output directory" field; the output path lives in `wrangler.jsonc`
instead):

1. In the Cloudflare dashboard, on the Worker's **Settings → Build**
   configuration:
   - **Build command**: `npm run build` (make sure this field contains only
     that — not `npm run build, output dir dist` concatenated as one string)
   - **Deploy command**: `npx wrangler deploy` (default)
   - **Path**: `/`
2. Add a secret (Settings → **Variables and secrets**):
   - `AIRTABLE_API_KEY` — a personal access token scoped to read the
     "Lucky Penny Kitties" base (`apprSgTHj4HbR7IFB`), table `Cats`
     (`tbl7FbKhHAu7SgIyj`). Create one at
     https://airtable.com/create/tokens with `data.records:read` scope.
   - Add it as a **Secret**, with the exact name `AIRTABLE_API_KEY` (matches
     `env.AIRTABLE_API_KEY` in `worker/index.js`).
3. Trigger a deploy (push to the production branch, or retry the build).
4. Add the custom domain: **Domains → Add** → `bobbykelly.us`. If the
   domain's DNS is already on Cloudflare, this can be added directly;
   otherwise follow the prompted DNS instructions at your registrar.

## SMS notifications (Twilio)

The Worker also exposes `POST /api/notify`, a general-purpose endpoint for
texting a fixed list of phone numbers (e.g. you and your family) — it isn't
tied to the cat site. It calls Twilio's SMS API server-side, so no Twilio
credentials ever reach a browser.

### 1. Create a Twilio account and get credentials

1. Sign up at https://www.twilio.com/try-twilio (free trial works for
   testing — trial accounts can only text phone numbers you've verified,
   see step 3).
2. On the [Twilio Console dashboard](https://console.twilio.com), copy your
   **Account SID** and **Auth Token** — you'll add these as secrets below.
3. Get a Twilio phone number to send *from*: Console → **Phone Numbers** →
   **Buy a number** (trial accounts get one free number). Copy it in
   E.164 format, e.g. `+15551234567`.
4. If you're on a trial account, verify each family member's phone number
   under Console → **Phone Numbers** → **Verified Caller IDs** — trial
   accounts can only send SMS to verified numbers. Upgrading to a paid
   account (a few dollars of credit) removes this restriction.

### 2. Add secrets to the Cloudflare Worker

Same place as `AIRTABLE_API_KEY` (Settings → **Variables and secrets** →
add as **Secret**, or `npx wrangler secret put <NAME>` locally):

- `TWILIO_ACCOUNT_SID` — from the Twilio Console.
- `TWILIO_AUTH_TOKEN` — from the Twilio Console.
- `TWILIO_FROM_NUMBER` — the Twilio number from step 1.3, e.g. `+15551234567`.
- `FAMILY_PHONE_NUMBERS` — comma-separated E.164 numbers to notify, e.g.
  `+15551112222,+15553334444`.
- `NOTIFY_SECRET` — a password you make up (e.g. `openssl rand -hex 32`).
  Required in the `x-notify-secret` request header so random visitors can't
  send texts through your Worker.

### 3. Send a notification

```sh
curl -X POST https://bobbykelly.us/api/notify \
  -H "content-type: application/json" \
  -H "x-notify-secret: <your NOTIFY_SECRET>" \
  -d '{"message": "New cat just posted!"}'
```

Every number in `FAMILY_PHONE_NUMBERS` gets texted the given `message`. The
response lists the per-recipient Twilio result so you can see any failures
(e.g. an unverified trial number).

## Project structure

- `src/pages/index.astro` — home page
- `src/pages/cats.astro` — adoptable cats page (client-side fetch to `/api/cats`)
- `worker/index.js` — Cloudflare Worker: serves the static site and routes
  `/api/cats` and `/api/notify`
- `worker/notify.js` — sends SMS notifications via Twilio
- `wrangler.jsonc` — Worker config (entry point, static assets directory)
- `public/global.css` — site styles
