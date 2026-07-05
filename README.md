# bobbykelly.us — Lucky Penny Kitties

A static site for Lucky Penny Kitties, a foster-based cat rescue, built with
[Astro](https://astro.build) and deployed to Cloudflare Pages. The Adoptable
Cats page loads live data from the "Lucky Penny Kitties" Airtable base via a
Cloudflare Pages Function, so the Airtable API key never reaches the browser.

## Local development

```sh
npm install
npm run dev
```

The `/cats` page calls `/api/cats`, which only runs under Cloudflare's
Functions runtime. To test it locally with Wrangler:

```sh
npm run build
npx wrangler pages dev dist --binding AIRTABLE_API_KEY=<your-airtable-token>
```

## Deploying to Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages →
   Connect to Git** and select this repository (`middle72/didactic-octo-happiness`,
   branch `claude/bobbykelly-us-website-kl0qqu` or `main` once merged).
2. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add an environment variable/secret (Settings → Environment variables):
   - `AIRTABLE_API_KEY` — a personal access token scoped to read the
     "Lucky Penny Kitties" base (`apprSgTHj4HbR7IFB`), table `Cats`
     (`tbl7FbKhHAu7SgIyj`). Create one at
     https://airtable.com/create/tokens with `data.records:read` scope.
   - Mark it as **Secret**, not plaintext.
4. Deploy. Cloudflare Pages automatically picks up the `functions/` directory
   as Pages Functions — no extra config needed.
5. Add the custom domain: **Custom domains → Set up a custom domain** →
   `bobbykelly.us`. If the domain's DNS is already on Cloudflare, this adds
   the CNAME automatically; otherwise follow the prompted DNS instructions
   at your registrar.

## Project structure

- `src/pages/index.astro` — home page
- `src/pages/cats.astro` — adoptable cats page (client-side fetch to `/api/cats`)
- `functions/api/cats.js` — Cloudflare Pages Function that proxies Airtable
  and keeps the API key server-side
- `public/global.css` — site styles
