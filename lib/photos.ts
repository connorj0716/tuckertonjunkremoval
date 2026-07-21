import fs from "node:fs";
import path from "node:path";

/**
 * Photos are optional. Drop a file into public/photos using one of the slot
 * names below and it renders automatically. Leave the slot empty and the
 * section falls back to the gradient and icon design, so the site never ships
 * with a broken or empty image.
 *
 * Supported extensions are tried in order, so a .webp beats a .jpg.
 */
const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png", ".avif"];

const PHOTO_DIR = path.join(process.cwd(), "public", "photos");

export type PhotoSlot =
  | "hero"
  | "junk-removal"
  | "furniture-removal"
  | "appliance-removal"
  | "estate-cleanouts"
  | "construction-debris"
  | "yard-waste-removal";

/**
 * Resolves a slot to a public URL, or null when no file is present.
 * Runs at build time only, since every page that calls it is static.
 */
export function getPhoto(slot: PhotoSlot): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(PHOTO_DIR, `${slot}${ext}`))) {
      return `/photos/${slot}${ext}`;
    }
  }
  return null;
}

/**
 * Alt text must describe what the photo actually shows, not what we wish it
 * showed. Update the entry whenever a slot's image is replaced.
 */
export const photoAlt: Record<PhotoSlot, string> = {
  hero: "A dump truck parked in an open field at dusk",
  "junk-removal":
    "A room piled with old chairs, wooden furniture, and household clutter waiting to be cleared out",
  "furniture-removal":
    "Old couch and furniture removed from a home in Tuckerton, NJ",
  "appliance-removal":
    "Old refrigerator and appliances hauled away in Tuckerton, NJ",
  "estate-cleanouts":
    "Empty room after an estate cleanout in Tuckerton, NJ",
  "construction-debris":
    "Construction and renovation debris cleared from a job site in Ocean County, NJ",
  "yard-waste-removal":
    "Brush and yard waste piled for removal in Tuckerton, NJ",
};
