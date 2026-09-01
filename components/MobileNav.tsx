"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative w-9 h-9 flex items-center justify-center"
      >
        <span
          className={`absolute block h-[2px] w-5 bg-text transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-[6px]"
          }`}
        />
        <span
          className={`absolute block h-[2px] w-5 bg-text transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-[2px] w-5 bg-text transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-[6px]"
          }`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-white z-40 transition-all duration-300 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="wrap py-8 flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-display py-3 border-b border-border transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </div>
  );
}
