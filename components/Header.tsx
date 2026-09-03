import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
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