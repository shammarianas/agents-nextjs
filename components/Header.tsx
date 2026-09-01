import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <nav className="wrap flex items-center gap-6 h-[72px]">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight shrink-0">
          <span className="w-2.5 h-2.5 rounded-[3px] bg-accent shadow-[0_0_0_4px_rgba(108,92,231,0.18)]" />
          {SITE.name}
        </Link>

        <div className="hidden md:flex items-center gap-6 shrink-0">
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

        <Suspense fallback={<div className="hidden sm:block flex-1 max-w-[420px] mx-auto" />}>
          <SearchBar />
        </Suspense>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-xl whitespace-nowrap hover:opacity-90 transition shrink-0"
        >
          Book a demo
        </a>

        <div className="ml-auto md:ml-0">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
