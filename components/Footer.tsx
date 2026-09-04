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
          <p className="text-white/50 text-sm max-w-[280px] mb-6">Agentix System is a Dubai-based AI solutions company specializing in custom AI automation and Agentic AI systems. We help businesses automate workflows, connect their tools, and build intelligent systems that work with minimal human intervention.</p>
          
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
              <Link href="/products" className="text-white/50 text-sm hover:text-white transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/policy" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</Link>
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
          <div className="flex items-center gap-4 mt-5" aria-label="Social media links">
            <a
              href="https://www.instagram.com/agentix.system/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-[5px] rounded-[50px] border border-accent text-accent hover:text-white transition-colors hover:scale-110 hover:border-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/agentix.system/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-[5px] rounded-[50px] border border-accent text-accent hover:text-white transition-colors hover:scale-110 hover:border-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.63-.14-2.6 0-4.38 1.59-4.38 4.51V10H7v3h2.79v8h3.71Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@agentixsystem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-[5px] rounded-[50px] border border-accent text-accent hover:text-white transition-colors hover:scale-110 hover:border-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.75 12 4.75 12 4.75s-5.93 0-7.64.49a2.75 2.75 0 0 0-1.94 1.95C1.93 8.91 1.93 12 1.93 12s0 3.09.49 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.49 7.64.49 7.64.49s5.93 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95c.49-1.72.49-4.81.49-4.81s0-3.09-.49-4.81ZM10 15.25v-6.5L15.5 12 10 15.25Z" />
              </svg>
            </a>
          </div>
          {isSubmitted && (
            <p className="mt-3 text-xs text-emerald-300" aria-live="polite">
              Thanks for subscribing.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-6 flex justify-center items-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {SITE.name}. Powered by <a href="https://www.shammarianas.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Sham Marianas FZC</a>.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
