# Rovix — AI Automation Agents (Next.js)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Where things live

- `lib/products.ts` — **the only file you need to edit** to add, remove, or
  change an agent. Every agent's card, detail page, and SEO description
  comes from this file. `slug` becomes the URL: `/agents/<slug>`.
- `lib/config.ts` — site name, real domain (`SITE_URL`), and WhatsApp link.
  **Set your real domain here before deploying** — it feeds the sitemap,
  canonical URLs, and Open Graph tags.
- `app/page.tsx` — home page (hero + product grid).
- `app/agents/[slug]/page.tsx` — the product detail page template. One file
  generates a real, individually-crawlable page for every agent, each with
  its own `<title>`, meta description, and structured data.
- `app/sitemap.ts` / `app/robots.ts` — generated automatically from
  `lib/products.ts`, no manual editing needed.
- `components/` — Header, Hero, ProductCard, ProductGrid, Footer, etc.

## SEO built in

- Unique `<title>` and meta description per agent page
- Open Graph + Twitter card tags site-wide and per page
- `Organization`, `Product`, and `BreadcrumbList` JSON-LD structured data
- Auto-generated `sitemap.xml` and `robots.txt`
- Pages are statically pre-rendered at build time (`generateStaticParams`)
  for fast load and full crawlability
- Semantic HTML and descriptive `alt` text on every image

## Deploying

Push this to GitHub and import it on [Vercel](https://vercel.com/new) — zero
config needed. Any other Node host that supports Next.js works too.

Before going live, update `SITE.url` in `lib/config.ts` to your real domain.
