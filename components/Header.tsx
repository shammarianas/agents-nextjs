import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
import { SITE } from "@/lib/config";
import { PRODUCTS } from "@/lib/products";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <nav className="wrap flex items-center gap-6 h-[72px]">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* Files in /public are referenced by path, not imported as a module */}
          <img src="/assets/Logo.png" alt={SITE.name} className="h-8 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6 shrink-0">
          <div className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-textDim hover:text-text transition-colors"
            >
              Products
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
                <Link
                  href="/assistant"
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-text hover:bg-surface transition-colors"
                >
                  AI Avatar
                  <span className="mt-0.5 block text-xs font-normal text-textDim">Talk with our live AI assistant</span>
                </Link>
                {/* <div className="my-1 border-t border-border" />
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/agents/${product.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-textDim hover:bg-surface hover:text-text transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-surface transition-colors"
                >
                  View all products
                </Link> */}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-textDim hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Suspense fallback={<div className="hidden md:block flex-1 max-w-[420px] mx-auto" />}>
          <div className="hidden md:block flex-1 max-w-[420px] mx-auto">
            <SearchBar />
          </div>
        </Suspense>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-xl whitespace-nowrap hover:opacity-90 transition shrink-0"
        >
           Get a Consultation
        </a>

        <div className="ml-auto md:ml-0">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}