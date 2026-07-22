import { Mail, MapPin, Phone, Truck } from "lucide-react";
import { services, site, towns } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pt-16 text-navy-200">
      <div className="container-x">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500">
                <Truck className="h-6 w-6 text-navy-950" strokeWidth={2.25} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  Tuckerton Junk Removal
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-300">
                  Ocean County Junk Removal
                </span>
              </span>
            </div>
            <p className="mt-5 leading-relaxed">
              Same-day junk removal, furniture and appliance pickup, and estate
              cleanouts for Tuckerton, NJ and the surrounding Ocean County
              towns.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-amber-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Service Area
            </h2>
            <ul className="mt-5 space-y-2.5">
              {towns.map((t) => (
                <li key={t}>{t === "Radio Road" ? "Radio Road Area" : t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 font-bold text-white transition-colors hover:text-amber-400"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-amber-400"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <span>
                  Based in Manahawkin, NJ 08050
                  <br />
                  Serving Tuckerton and Ocean County
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm sm:flex-row">
          <p>
            &copy; {year} Tuckerton Junk Removal, part of Ocean County Junk
            Removal. All rights reserved.
          </p>
          <p className="text-gray-400">
            Powered by{" "}
            <a
              href="https://cjresults.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              CJResults
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
