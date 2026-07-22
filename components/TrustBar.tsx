import { Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  { icon: Star, label: `${site.reviewCount}+ 5-star reviews` },
  { icon: Clock, label: "Same-day service" },
  { icon: ShieldCheck, label: "Insured crew" },
  { icon: MapPin, label: "Local to Tuckerton" },
];

export default function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-b border-navy-100 bg-navy-50">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 py-5 sm:flex sm:items-center sm:justify-between sm:py-6">
          {items.map((i) => (
            <li key={i.label} className="flex items-center gap-2">
              <i.icon
                className="h-5 w-5 shrink-0 text-amber-600"
                strokeWidth={2.25}
              />
              <span className="text-sm font-bold leading-tight text-navy-900 sm:text-base">
                {i.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
