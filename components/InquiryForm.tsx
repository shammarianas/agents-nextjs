"use client";

import { useEffect, useState } from "react";

type Country = {
  name: string;
  code: string; // dial code e.g. +971
  flag: string;
  iso: string;
};

// ISO2 code se flag emoji banane ka helper (regional indicator symbols)
function isoToFlag(iso: string) {
  if (!iso || iso.length !== 2) return "";
  return String.fromCodePoint(
    ...iso
      .toUpperCase()
      .split("")
      .map((c) => 127397 + c.charCodeAt(0))
  );
}

// reliable fallback agar CDN fetch fail ho jaye (no internet / blocked)
const FALLBACK_COUNTRIES: Country[] = [
  { name: "UAE", code: "+971", flag: "🇦🇪", iso: "AE" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", iso: "SA" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", iso: "KW" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", iso: "QA" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭", iso: "BH" },
  { name: "Oman", code: "+968", flag: "🇴🇲", iso: "OM" },
  { name: "Jordan", code: "+962", flag: "🇯🇴", iso: "JO" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧", iso: "LB" },
  { name: "Egypt", code: "+20", flag: "🇪🇬", iso: "EG" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", iso: "TR" },
  { name: "India", code: "+91", flag: "🇮🇳", iso: "IN" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰", iso: "PK" },
  { name: "US / Canada", code: "+1", flag: "🇺🇸", iso: "US" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "GB" },
  { name: "France", code: "+33", flag: "🇫🇷", iso: "FR" },
  { name: "Germany", code: "+49", flag: "🇩🇪", iso: "DE" },
  { name: "Australia", code: "+61", flag: "🇦🇺", iso: "AU" },
];

const SERVICE_OPTIONS = [
  "AI Chatbot & Support Automation",
  "Outreach & Lead Generation",
  "Data Entry Automation",
  "Reporting & Analytics Agent",
  "Custom Workflow Automation",
  "Other",
];

const BUDGET_OPTIONS = [
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

export default function InquiryForm() {
  const [countries, setCountries] = useState<Country[]>(FALLBACK_COUNTRIES);
  const [countryCode, setCountryCode] = useState("+971");
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function loadCountries() {
      try {
        // world-countries dataset via jsdelivr CDN — restcountries.com se zyada reliable
        const res = await fetch(
          "https://cdn.jsdelivr.net/npm/world-countries@4/countries.json"
        );
        if (!res.ok) throw new Error("Bad response");
        const data = await res.json();

        const parsed: Country[] = data
          .map((c: any) => {
            const root = c?.idd?.root ?? "";
            const suffixes = c?.idd?.suffixes ?? [];
            // agar multiple suffixes hain (jese US) to pehla le lo
            const dial = root
              ? `${root}${suffixes.length === 1 ? suffixes[0] : ""}`
              : "";
            const iso = c?.cca2 ?? "";
            return {
              name: c?.name?.common ?? "",
              code: dial,
              flag: isoToFlag(iso),
              iso,
            };
          })
          .filter((c: Country) => c.code && c.name)
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        if (parsed.length > 50) {
          setCountries(parsed);
          const uae = parsed.find((c) => c.iso === "AE");
          setCountryCode(uae ? uae.code : parsed[0].code);
        }
      } catch (err) {
        console.error("Country fetch failed, using fallback list", err);
        setCountries(FALLBACK_COUNTRIES);
      } finally {
        setLoadingCountries(false);
      }
    }

    loadCountries();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: apna API call / email handler yahan lagayen
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 900);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white/[0.04] px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-textDim/50";

  const labelClass = "block text-xs font-medium text-textDim mb-1.5";

  return (
    <div className="relative rounded-2xl border border-border bg-white/[0.03] backdrop-blur-sm p-7 sm:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-accent2/20 blur-2xl pointer-events-none" />

      <div className="eyebrow mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse2" />
        Get a free consultation
      </div>

      <h3 className="font-display font-bold text-[1.4rem] leading-tight mb-1.5">
        Talk to our <span className="text-accent">automation team</span>
      </h3>
      <p className="text-textDim text-sm mb-6">
        Fill this out and we&apos;ll reach out within 24 hours.
      </p>

      {done ? (
        <div className="py-10 text-center">
          <div className="text-accent font-display font-bold text-lg mb-1.5">
            Thank you!
          </div>
          <p className="text-textDim text-sm">
            Your inquiry has been received. We&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Company *</label>
              <input
                required
                type="text"
                placeholder="Your company"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Email *</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Contact Number *</label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  disabled={loadingCountries}
                  className="rounded-lg border border-border bg-white/[0.04] px-2 py-2.5 text-sm outline-none focus:border-accent transition-colors max-w-[100px] disabled:opacity-60"
                >
                  {countries.map((c, i) => (
                    <option key={`${c.iso}-${i}`} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  required
                  type="tel"
                  placeholder="123 4567"
                  className={`${inputClass} flex-1`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Service *</label>
              <select required defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>
                  Please choose an option
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Budget *</label>
              <select required defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>
                  Please choose an option
                </option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Idea (optional)</label>
            <textarea
              rows={4}
              placeholder="Share your idea, references, or goals..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}