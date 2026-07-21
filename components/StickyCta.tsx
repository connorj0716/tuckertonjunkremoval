import { MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-navy-800 bg-navy-950/95 p-3 backdrop-blur sm:hidden">
      <a
        href={site.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-[15px] font-bold text-navy-950"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        Call Now
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-4 py-3 text-[15px] font-bold text-white"
      >
        <MessageSquare className="h-4 w-4" strokeWidth={2.5} />
        Free Quote
      </a>
    </div>
  );
}
