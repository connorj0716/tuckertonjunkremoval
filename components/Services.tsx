import {
  Armchair,
  Check,
  HardHat,
  Home,
  Leaf,
  Trash2,
  WashingMachine,
} from "lucide-react";
import { services } from "@/lib/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "junk-removal": Trash2,
  "furniture-removal": Armchair,
  "appliance-removal": WashingMachine,
  "estate-cleanouts": Home,
  "construction-debris": HardHat,
  "yard-waste-removal": Leaf,
};

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Services</p>
          <h2 className="h2">
            Junk removal services for Tuckerton and Little Egg Harbor
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            If it fits in the truck and it is not hazardous, we will take it.
            Homes, rentals, job sites, and businesses across Tuckerton, Bass
            River, Eagleswood, Manahawkin, and Stafford Township.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.slug] ?? Trash2;
            return (
              <article
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 transition-colors duration-200 group-hover:bg-amber-500">
                  <Icon className="h-6 w-6 text-amber-400 transition-colors duration-200 group-hover:text-navy-950" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-950">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-navy-700">
                  {s.blurb}
                </p>
                <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm font-medium text-navy-800"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-navy-950 p-8 text-center sm:p-10">
          <h3 className="text-2xl font-bold text-white">
            Not sure if we take it?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-navy-200">
            Send a photo and we will give you a straight answer plus a price in
            minutes. No pressure, no obligation.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get My Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
