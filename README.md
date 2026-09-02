# bobbykelly.us — Lucky Penny Kitties

The full site for Lucky Penny Kitties, a foster-based cat rescue, built with
[Astro](https://astro.build) and deployed to Cloudflare Workers (via Workers
Builds — the git-connected deploy flow that runs a build then `wrangler
deploy`). It replaces the rescue's previous Shopify site to cut hosting
costs to $0. The Adoptable Cats pages load live data from the "Lucky Penny
Kitties" Airtable base — the list page through the Worker at request time
(so the Airtable API key never reaches the browser), and each cat's detail
page at **build time** via `getStaticPaths`, so every cat in Airtable
automatically gets its own page with no manual authoring.

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
AIRTABLE_API_KEY=<your-airtable-token> npm run build
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
2. Add `AIRTABLE_API_KEY` in **two** places — they are separate systems and
   both are needed:
   - As a **Secret** (Settings → **Variables and secrets**, Worker
     runtime) — this is what `worker/index.js` reads at request time to
     serve `/api/cats`.
   - As a **Build variable** (Settings → **Build → Variables**) — this is
     what `getStaticPaths` in `src/pages/cats/[slug].astro` reads via
     `process.env.AIRTABLE_API_KEY` during `npm run build`, to generate a
     page per cat. If this one is missing, the build still succeeds but no
     `/cats/<name>` pages are generated.
   - Use a personal access token scoped to read the "Lucky Penny Kitties"
     base (`apprSgTHj4HbR7IFB`), table `Cats` (`tbl7FbKhHAu7SgIyj`). Create
     one at https://airtable.com/create/tokens with `data.records:read`
     scope.
3. Trigger a deploy (push to the production branch, or retry the build).
4. Add the custom domain: **Domains → Add** → `bobbykelly.us`. If the
   domain's DNS is already on Cloudflare, this can be added directly;
   otherwise follow the prompted DNS instructions at your registrar.

## Project structure

- `src/pages/index.astro` — home page
- `src/pages/cats.astro` — adoptable cats list (client-side fetch to `/api/cats`)
- `src/pages/cats/[slug].astro` — per-cat detail page, generated at build
  time from Airtable for every cat; a `PROFILES` map in the file holds the
  hand-written bios/photos for cats we already have real copy for (Beau,
  Big Boy, Boba, Chandler, Kristi) — any other cat still gets a page, using
  its Airtable photos and a generated intro
- `src/pages/donate.astro`, `volunteer.astro`, `foster.astro`,
  `surrender.astro`, `events.astro`, `sponsors.astro`, `community.astro`,
  `contact.astro` — the rest of the rescue's pages, ported from the retired
  Shopify site
- `src/pages/bingo.astro`, `break.astro` — the live bingo-fundraiser caller
  and its snack-break screen
- `worker/index.js` — Cloudflare Worker: serves the static site and handles
  `/api/cats` by proxying Airtable with the server-side secret
- `wrangler.jsonc` — Worker config (entry point, static assets directory)
- `public/global.css` — site styles
