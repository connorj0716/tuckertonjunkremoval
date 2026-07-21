import { Truck } from "lucide-react";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5"
      aria-label="Tuckerton Junk Removal home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
        <Truck className="h-6 w-6 text-navy-950" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${
            dark ? "text-white" : "text-navy-950"
          }`}
        >
          Tuckerton Junk Removal
        </span>
        <span
          className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
            dark ? "text-navy-200" : "text-navy-600"
          }`}
        >
          Ocean County Junk Removal
        </span>
      </span>
    </a>
  );
}
