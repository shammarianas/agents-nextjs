"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/homeContent";
import { SITE } from "@/lib/config";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 text-black border-t border-black/10">
      <div className="wrap max-w-3xl">
        <Reveal>
          <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
            Questions
          </span>
          <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] mb-10">
            What people usually ask before starting
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-t border-black/10">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-black/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center gap-4 py-5 text-left font-medium hover:text-accent2 transition-colors"
                  >
                    <span>{item.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-black/55 text-sm leading-relaxed max-w-xl">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* <Reveal delay={150}>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition"
            >
              Book a call
            </a>
            <span className="text-black/45 text-sm">
              Free 45-min AI strategy review, no obligation
            </span>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
