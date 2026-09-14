import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Integrations from "@/components/Integrations";
import HowWeWork from "@/components/HowWeWork";
import ProcessLayers from "@/components/ProcessLayers";
import FaqSection from "@/components/FaqSection";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/config";
import { FAQS } from "@/lib/homeContent";

export const metadata: Metadata = {
  title: `AI Automation Agents for Sales, Support & Operations | ${SITE.name}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  keywords: SITE.keywords,
  openGraph: {
    title: `AI Automation Agents for Sales, Support & Operations | ${SITE.name}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = (searchParams.q ?? "").trim().toLowerCase();

  const filtered = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tag.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query)
      )
    : PRODUCTS;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ProductGrid products={filtered.slice(0, 6)} query={searchParams.q} />
      <div className="bg-surface pb-20 text-center">
        <a
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          View all agents
        </a>
      </div>
      <Integrations />
      <ProcessLayers />
      <FaqSection />
      <HowWeWork />
    </main>
  );
}
