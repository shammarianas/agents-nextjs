"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/config";

const contactItems = [
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s+/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.7 2.88a2 2 0 0 1-.45 2.11L9 9.91a16 16 0 0 0 6.09 6.09l1.2-1.31a2 2 0 0 1 2.11-.45c.92.34 1.89.57 2.88.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: SITE.address,
    href: "https://maps.google.com/?q=Dubai+United+Arab+Emirates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M12 21s6-5.15 6-11a6 6 0 1 0-12 0c0 5.85 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1420] text-white pt-16">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-10 pb-14">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight mb-4">
            <img src="/assets/Logo.png" alt={SITE.name} className="h-8 w-auto object-contain" />
          </div>
          <p className="text-white/50 text-sm max-w-[280px] mb-6">{SITE.description}</p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition"
          >
            Book a demo
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-white/80">Contact</h4>
          <ul className="space-y-3">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 text-white/55 text-sm hover:text-white transition-colors"
                >
                  <span className="mt-0.5 text-accent">{item.icon}</span>
                  <span>{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-white/80">Company</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/" className="text-white/50 text-sm hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white/50 text-sm hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/products" className="text-white/50 text-sm hover:text-white transition-colors">Product</Link>
            </li>
            <li>
              <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">Term &amp; Condition</Link>
            </li>
            <li>
              <Link href="/policy" className="text-white/50 text-sm hover:text-white transition-colors">Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm mb-4 text-white/80">Stay in the loop</h4>
          <p className="text-white/50 text-sm mb-4">Occasional notes on automation, no spam.</p>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsSubmitted(false);
              }}
              placeholder="you@company.com"
              aria-label="Email address"
              className="flex-1 min-w-0 bg-white/5 border border-white/15 text-white placeholder:text-white/35 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-accent transition"
            />
            <button
              type="submit"
              className="bg-accent text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-3 text-xs text-emerald-300" aria-live="polite">
              Thanks for subscribing.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.9 2.5h3.3l-7.2 8.2 8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H2.5l7.7-8.8L2 2.5h6.8l4.7 6.2 5.4-6.2zm-1.2 17.6h1.8L7.4 4.3H5.5l12.2 15.8z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
