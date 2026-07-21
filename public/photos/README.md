# Photos

Drop image files in this folder to turn on photography across the site. Nothing
here is required. Any slot without a file falls back to the gradient and icon
design, so the site always renders correctly.

## Slots

| Filename | Where it shows |
| --- | --- |
| `hero.*` | Full-bleed hero background, behind a navy overlay |
| `junk-removal.*` | Junk Removal service card |
| `furniture-removal.*` | Furniture Removal service card |
| `appliance-removal.*` | Appliance Removal service card |
| `estate-cleanouts.*` | Estate Cleanouts service card |
| `construction-debris.*` | Construction Debris service card |
| `yard-waste-removal.*` | Yard Waste Removal service card |

Extensions are resolved in this order: `.webp`, `.jpg`, `.jpeg`, `.png`,
`.avif`. So `hero.webp` wins over `hero.jpg` if both exist.

## Recommended sizes

- `hero.*` at roughly 2000x1200. It sits under a dark overlay, so contrast and
  fine detail matter less than composition.
- Service cards at roughly 1200x750, since they render at a 16:10 aspect ratio.

Next.js handles resizing, WebP conversion, and lazy loading, so upload the
largest clean version you have rather than pre-shrinking it.

## Swapping in real photos

Replace any file here with a real photo of your own trucks, crew, or job
before and afters, keeping the same filename. No code changes are needed.

Real job photos outperform stock for local SEO, so this is worth doing when you
have them. Update the alt text in `lib/photos.ts` to describe what the new photo
actually shows.

Wiring lives in `lib/photos.ts`.
