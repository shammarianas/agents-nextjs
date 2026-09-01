import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Integrations from "@/components/Integrations";
import HowWeWork from "@/components/HowWeWork";
import ProcessLayers from "@/components/ProcessLayers";
import FaqSection from "@/components/FaqSection";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE.name} — AI Automation Agents for Sales, Support & Operations`,
  description: SITE.description,
  alternates: { canonical: "/" },
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
      <Hero />
      <ProductGrid products={filtered} query={searchParams.q} />
      <Integrations />
      <HowWeWork />
      <ProcessLayers />
      <FaqSection />
    </main>
  );
}
