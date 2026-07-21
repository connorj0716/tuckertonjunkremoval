import { Clock, DollarSign, MapPin, Recycle, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: MapPin,
    title: "Actually local",
    body: "We are based in Manahawkin, minutes up Route 9 from Tuckerton. You get a neighbor with a truck, not a call center routing your job to a stranger.",
  },
  {
    icon: Clock,
    title: "Same-day when you need it",
    body: "Call in the morning and there is a good chance we are at your Tuckerton or Little Egg Harbor address that afternoon. Closings and move-outs are our specialty.",
  },
  {
    icon: DollarSign,
    title: "Upfront pricing, no surprises",
    body: "You see the price before we lift a thing. We charge by the space your load takes up, so there is no meter running and no fee added at the end.",
  },
  {
    icon: Star,
    title: "200+ five-star reviews",
    body: "Ocean County families, realtors, and contractors have rated us five stars more than 200 times on Google. Reputation is the only reason this business grows.",
  },
  {
    icon: Recycle,
    title: "Donate and recycle first",
    body: "Usable furniture and household goods go to local donation centers, metal and appliances go to recyclers, and the landfill is the last stop, not the first.",
  },
  {
    icon: ShieldCheck,
    title: "Insured and careful",
    body: "Fully insured crew, floor protection on the way out, and a broom before we leave. Your walls, stairs, and driveway stay the way we found them.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-navy-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Us</p>
          <h2 className="h2">
            Why Tuckerton keeps calling the same junk removal crew
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Plenty of companies will haul your stuff. Very few will show up on
            time, charge what they quoted, and leave the space cleaner than they
            found it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15">
                <r.icon className="h-6 w-6 text-amber-600" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-950">
                {r.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-navy-700">{r.body}</p>
            </div>
          ))}
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy-200 sm:grid-cols-3">
          {[
            { k: `${site.reviewCount}+`, v: "Five-star Google reviews" },
            { k: "7 days", v: "A week, including weekends" },
            { k: "$0", v: "Charged for estimates" },
          ].map((s) => (
            <div key={s.v} className="bg-white px-6 py-8 text-center">
              <dt className="text-4xl font-extrabold tracking-tight text-navy-950">
                {s.k}
              </dt>
              <dd className="mt-2 text-sm font-semibold uppercase tracking-wider text-navy-600">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
