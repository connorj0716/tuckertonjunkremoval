# Tuckerton Junk Removal

Marketing site for Tuckerton Junk Removal, part of Ocean County Junk Removal.

Live at [tuckertonjunkremoval.com](https://tuckertonjunkremoval.com).

## Stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

There are no environment variables and no server functions. Every route is
statically generated, so the site is pure static output on the CDN.

## Contact strategy

The site drives phone calls rather than form fills. Every call to action is a
`tel:` link to (609) 703-2115, including the sticky mobile bar, so there is no
lead database, no notification email, and no API route to maintain.

If a form is ever needed again, the previous Supabase and Resend
implementation is in git history.

## SEO

- Metadata, Open Graph, and Twitter cards are set in `app/layout.tsx`.
- The social preview image is generated at build time by
  `app/opengraph-image.tsx`.
- JSON-LD lives in `components/JsonLd.tsx` and covers `LocalBusiness`,
  `WebSite`, `WebPage`, and `FAQPage`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt`.

Site copy, town list, services, and FAQ content are all centralized in
`lib/site.ts`.

---

Powered by [CJResults](https://cjresults.com).
