# Tuckerton Junk Removal

Marketing site for Tuckerton Junk Removal, part of Ocean County Junk Removal.

Live at [tuckertonjunkremoval.com](https://tuckertonjunkremoval.com).

## Stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- Supabase JS v2 for lead storage
- Resend for lead notification emails
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the real values
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used to insert leads |
| `RESEND_API_KEY` | Sends the new-lead notification email |

The service role key is read only inside `app/api/lead/route.ts`, which runs
server side. It is never exposed to the browser.

## Lead flow

1. The contact form posts to `POST /api/lead`.
2. The route validates the payload and inserts a row into the Supabase table
   `OCJR - Leads` with `source` set to `tuckerton-website` and `handled` set to
   `false`.
3. On a successful insert it sends a notification through Resend from
   `connor@cjresults.com` to `connor@cjresults.com`.

If the Resend call fails the request still succeeds, since the lead is already
saved in Supabase. The failure is logged instead.

### Supabase table

Table name: `OCJR - Leads`

| Column | Type |
| --- | --- |
| `id` | primary key |
| `name` | text |
| `phone` | text |
| `email` | text, nullable |
| `town` | text |
| `service` | text |
| `message` | text, nullable |
| `source` | text, defaults to `tuckerton-website` |
| `handled` | boolean |
| `created_at` | timestamptz |

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
