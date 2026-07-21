import { faqs, site } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" className="section bg-navy-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Junk removal questions from Tuckerton residents</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Straight answers to what people ask us most. Still stuck? Call{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-amber-600 underline underline-offset-4"
            >
              {site.phone}
            </a>{" "}
            and talk to a person.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-navy-100 bg-white px-6 shadow-card open:border-amber-500/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-bold text-navy-950 marker:hidden">
                <h3 className="text-lg font-bold">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-100 text-xl font-bold leading-none text-navy-900 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-navy-100 pb-6 pt-5 leading-relaxed text-navy-700">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
