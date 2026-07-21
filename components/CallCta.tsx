import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";

const assurances = [
  {
    icon: Clock,
    title: "Seven days a week",
    body: "We answer 7am to 7pm, weekends included. Call before noon and same-day pickup is usually open.",
  },
  {
    icon: Star,
    title: "Free phone estimates",
    body: "Describe the load or text a photo and you get a firm price on the spot. No visit required, no obligation.",
  },
  {
    icon: MapPin,
    title: "Minutes from Tuckerton",
    body: "Our trucks run out of Manahawkin, so Tuckerton, Little Egg Harbor, and Mystic Island are a short drive.",
  },
];

export default function CallCta() {
  return (
    <section id="contact" className="section bg-navy-950">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Get It Gone
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Call now for a free quote in about two minutes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100">
            One quick call is all it takes. Tell us what needs to go and where
            you are in Tuckerton, and we will give you a firm price and a
            pickup window before you hang up.
          </p>

          <a
            href={site.phoneHref}
            className="btn-primary mt-9 w-full px-8 py-5 text-xl sm:w-auto"
          >
            <Phone className="h-6 w-6" strokeWidth={2.5} />
            {site.phone}
          </a>

          <p className="mt-5 text-sm text-navy-300">
            Prefer to text? Send a photo of your pile to the same number.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {assurances.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500">
                <a.icon className="h-6 w-6 text-navy-950" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-2.5 leading-relaxed text-navy-200">{a.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-navy-300">
          Not urgent? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-amber-400 underline underline-offset-4 hover:text-amber-300"
          >
            {site.email}
          </a>{" "}
          and we will get back to you.
        </p>
      </div>
    </section>
  );
}
