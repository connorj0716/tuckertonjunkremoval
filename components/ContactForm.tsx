"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { services, site, towns } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const initial = {
  name: "",
  phone: "",
  email: "",
  town: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us instead."
      );
    }
  }

  const field =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-950 placeholder:text-navy-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";
  const label = "mb-1.5 block text-sm font-bold text-navy-900";

  return (
    <section id="contact" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Free Quote</p>
            <h2 className="h2">Get your Tuckerton junk removal quote</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              Tell us what you need gone and where you are. We reply fast with
              an upfront price, and same-day pickup is often available in
              Tuckerton, Little Egg Harbor, and Mystic Island.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 transition-colors hover:border-amber-500/40 hover:bg-white"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950">
                  <Phone className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wider text-navy-600">
                    Call or text
                  </span>
                  <span className="block text-lg font-bold text-navy-950">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 transition-colors hover:border-amber-500/40 hover:bg-white"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950">
                  <Mail className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-navy-600">
                    Email us
                  </span>
                  <span className="block break-all text-lg font-bold text-navy-950">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-lift sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-amber-500" />
                <h3 className="mt-5 text-2xl font-bold text-navy-950">
                  Got it. Talk soon.
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-navy-700">
                  Your request is in and we will get back to you shortly. Need
                  it handled today? Call us at {site.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-7"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="name">
                      Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      className={field}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="phone">
                      Phone <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className={field}
                      placeholder="(609) 555-0123"
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      className={field}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="town">
                      Town <span className="text-amber-600">*</span>
                    </label>
                    <select
                      id="town"
                      name="town"
                      required
                      value={form.town}
                      onChange={update("town")}
                      className={field}
                    >
                      <option value="">Select your town</option>
                      {towns.map((t) => (
                        <option key={t} value={t}>
                          {t === "Radio Road" ? "Radio Road Area" : t}
                        </option>
                      ))}
                      <option value="Other Ocean County">
                        Other Ocean County town
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className={label} htmlFor="service">
                      Service needed <span className="text-amber-600">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={update("service")}
                      className={field}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something Else">Something else</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="message">
                      What needs to go?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      className={field}
                      placeholder="A few pieces of furniture in the garage, plus an old fridge. Hoping for this week."
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {error} You can always reach us at {site.phone}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Get My Free Quote
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-sm text-navy-600">
                  No obligation. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
