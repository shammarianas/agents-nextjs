"use client";

import { useState, useEffect, Suspense } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { SITE } from "@/lib/config";
import { PRODUCTS } from "@/lib/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <div
      className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white z-[100] transition-all duration-300 ease-out ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <nav className="wrap py-8 flex flex-col gap-1 h-full overflow-y-auto">
        <div
          className={`mb-5 transition-all duration-300 ${
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Suspense fallback={<div className="h-11" />}>
            <SearchBar />
          </Suspense>
        </div>

        <div
          className={`border-b border-border transition-all duration-300 ${
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="block py-3 text-lg font-display"
          >
            Products
          </Link>
          <div className="mb-3 ml-3 border-l border-border pl-3">
            <Link
              href="/assistant"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold text-accent"
            >
              AI Avatar
            </Link>
            {/* {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/agents/${product.slug}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-textDim"
              >
                {product.name}
              </Link>
            ))} */}
          </div>
        </div>
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-lg font-display py-3 border-b border-border transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: `${(i + 1) * 60}ms` }}
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
  );

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative w-9 h-9 flex items-center justify-center z-[110]"
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

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}