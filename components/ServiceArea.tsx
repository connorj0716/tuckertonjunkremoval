import { MapPin, Navigation } from "lucide-react";
import { site, towns } from "@/lib/site";

const detail: Record<string, string> = {
  Tuckerton:
    "Our home base for pickups. Historic district homes, Main Street businesses, and everything off Route 9.",
  "Little Egg Harbor":
    "Full cleanouts, garage clears, and appliance hauls throughout the township, usually same day.",
  "Tuckerton Beach":
    "Lagoon-front properties, dock and deck debris, and storm cleanup after the water comes up.",
  "Radio Road":
    "Rentals, flips, and contractor debris along the Radio Road corridor and the surrounding lagoons.",
  "Bass River":
    "Wooded lots, sheds, and yard waste hauled out of New Gretna and the rest of Bass River Township.",
  Eagleswood:
    "West Creek and Eagleswood pickups, from single couches to full estate cleanouts.",
  "Mystic Island":
    "One of our busiest areas. Flood debris, appliances, and whole-house cleanouts on the island.",
  Manahawkin:
    "Where our trucks are parked, so Manahawkin jobs often get the earliest slots of the day.",
  "Stafford Township":
    "Beach Haven West, the Route 72 corridor, and every neighborhood in between.",
};

export default function ServiceArea() {
  return (
    <section id="service-area" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2 className="h2">
              Junk removal across Tuckerton and southern Ocean County
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              We run out of Manahawkin, which puts Tuckerton, Little Egg Harbor,
              and Mystic Island a short drive away. That is how we offer same-day
              pickup when the national outfits cannot.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700">
              Do not see your town? We cover most of Ocean County. Call and we
              will tell you straight away.
            </p>
            <div className="mt-8 rounded-2xl bg-navy-950 p-7">
              <div className="flex items-center gap-3">
                <Navigation className="h-5 w-5 text-amber-400" />
                <p className="font-bold text-white">Based in Manahawkin, NJ</p>
              </div>
              <p className="mt-3 leading-relaxed text-navy-200">
                The local arm of Ocean County Junk Removal. Same trucks, same
                crew, same upfront pricing.
              </p>
              <a
                href={site.phoneHref}
                className="btn-primary mt-6 w-full sm:w-auto"
              >
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {towns.map((t) => (
              <div
                key={t}
                className="rounded-xl border border-navy-100 bg-navy-50/60 p-5 transition-colors hover:border-amber-500/40 hover:bg-white"
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-amber-600"
                    strokeWidth={2.5}
                  />
                  <h3 className="font-bold text-navy-950">
                    {t === "Radio Road" ? "Radio Road Area" : t}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {detail[t]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
