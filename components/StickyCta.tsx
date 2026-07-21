import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-950/95 p-3 backdrop-blur sm:hidden">
      <a
        href={site.phoneHref}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3.5 text-base font-bold text-navy-950"
      >
        <Phone className="h-5 w-5" strokeWidth={2.5} />
        Call {site.phone}
      </a>
    </div>
  );
}
