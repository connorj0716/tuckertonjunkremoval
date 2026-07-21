import { CheckCircle2, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";

const points = [
  "Same-day and next-day pickup",
  "Upfront pricing before we load",
  "We carry it out, you point",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pb-16 pt-[104px] sm:pb-24 sm:pt-[136px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 32rem at 78% -10%, rgba(245,158,11,0.22), transparent 60%), radial-gradient(48rem 32rem at 8% 108%, rgba(51,112,183,0.35), transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </span>
              <span className="text-sm font-semibold text-amber-100">
                {site.reviewCount}+ five-star Google reviews
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Junk Removal in Tuckerton, NJ{" "}
              <span className="block text-amber-400">
                Hauled Away Same Day
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Local crew, honest pricing, and a truck that shows up when we say
              it will. We handle furniture, appliances, estate cleanouts, and
              construction debris for Tuckerton, Tuckerton Beach, Little Egg
              Harbor, Mystic Island, and the Radio Road area.
            </p>

            <ul className="mt-7 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-navy-100">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-amber-400"
                    strokeWidth={2.25}
                  />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {site.phone}
              </a>
              <a href="#contact" className="btn-secondary">
                Get a Free Quote
              </a>
            </div>

            <p className="mt-5 text-sm text-navy-300">
              Serving Tuckerton and all of southern Ocean County, seven days a
              week.
            </p>
          </div>

          <div className="animate-fade-up lg:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <h2 className="text-xl font-bold text-white">
                What a Tuckerton pickup looks like
              </h2>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    t: "You call or send photos",
                    d: "Tell us what you have and where it sits. Photos speed things up but are never required.",
                  },
                  {
                    t: "You get an upfront price",
                    d: "We quote by truck space, not by the hour, so the number you hear is the number you pay.",
                  },
                  {
                    t: "We load and clean up",
                    d: "Our crew carries everything out, sweeps the space, and hauls it off for donation or recycling.",
                  },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-extrabold text-navy-950">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-bold text-white">{s.t}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-navy-200">
                        {s.d}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
