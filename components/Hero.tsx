import Image from "next/image";
import { Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import { getPhoto, photoAlt } from "@/lib/photos";

export default function Hero() {
  const heroPhoto = getPhoto("hero");

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pb-16 pt-[104px] sm:pb-24 sm:pt-[136px]"
    >
      {heroPhoto && (
        <>
          <Image
            src={heroPhoto}
            alt={photoAlt.hero}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/*
            Scrim tuned to keep the headline legible while still letting the
            photo read. Heaviest on the left where the copy sits, lifting to
            the right so the image stays visible.
          */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-navy-950/65 sm:bg-gradient-to-r sm:from-navy-950/92 sm:via-navy-950/75 sm:to-navy-950/40"
          />
        </>
      )}
      {/* Brand glow. Pulled back over a photo so it tints rather than washes. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          heroPhoto ? "opacity-[0.3]" : "opacity-[0.55]"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(60rem 32rem at 78% -10%, rgba(245,158,11,0.22), transparent 60%), radial-gradient(48rem 32rem at 8% 108%, rgba(51,112,183,0.35), transparent 62%)",
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
              Furniture, appliances, estate cleanouts, and debris hauled from
              Tuckerton, Tuckerton Beach, Little Egg Harbor, Mystic Island, and
              the Radio Road area.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="btn-primary w-full py-4 text-lg sm:w-auto sm:py-3.5 sm:text-base"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {site.phone}
              </a>
              <a href="#services" className="btn-secondary w-full sm:w-auto">
                See What We Take
              </a>
            </div>

            <p className="mt-5 text-sm text-navy-300">
              Serving Tuckerton and southern Ocean County, seven days a week.
            </p>
          </div>

          <div className="animate-fade-up lg:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <h2 className="text-xl font-bold text-white">
                How a Tuckerton pickup works
              </h2>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    t: "Call or text a photo",
                    d: "Tell us what you have and where it sits.",
                  },
                  {
                    t: "Get an upfront price",
                    d: "Priced by truck space, not by the hour. The number you hear is what you pay.",
                  },
                  {
                    t: "We load and sweep up",
                    d: "We carry it all out and haul it off for donation or recycling.",
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
