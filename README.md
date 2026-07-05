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

## Project structure

- `src/pages/index.astro` — home page
- `src/pages/cats.astro` — adoptable cats page (client-side fetch to `/api/cats`)
- `worker/index.js` — Cloudflare Worker: serves the static site and handles
  `/api/cats` by proxying Airtable with the server-side secret
- `wrangler.jsonc` — Worker config (entry point, static assets directory)
- `public/global.css` — site styles
