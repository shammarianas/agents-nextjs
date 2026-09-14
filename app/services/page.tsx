import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description: `${SITE.name} designs, builds, and maintains AI automation agents for sales, support, operations, and marketing teams.`,
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    tag: "Sales",
    title: "Sales automation agents",
    body: "Outreach, lead qualification, and follow-ups handled automatically, with your reps stepping in only when a lead is ready to talk.",
  },
  {
    tag: "Support",
    title: "Customer support agents",
    body: "Instant answers for common tickets, backed by your own help docs, with anything unusual escalated to a human.",
  },
  {
    tag: "Operations",
    title: "Operations agents",
    body: "Data entry, invoice processing, and inbox triage — the repetitive back-office work that eats a team's week.",
  },
  {
    tag: "Marketing",
    title: "Content & marketing agents",
    body: "First drafts, outlines, and repetitive content work, built around your brand voice and existing pieces.",
  },
];

const PROCESS = [
  { step: "1", title: "Map the workflow", body: "We sit with your team to understand exactly what the process looks like today." },
  { step: "2", title: "Build the agent", body: "We connect it to your real tools and define the rules it has to follow." },
  { step: "3", title: "Review together", body: "You test it against real cases before anything runs unsupervised." },
  { step: "4", title: "Launch and support", body: "We monitor performance and adjust the agent as your workflow evolves." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${SITE.name} AI automation services`,
  serviceType: "AI workflow automation",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: "Worldwide",
  description: `${SITE.name} designs, builds, and maintains AI automation agents for sales, support, operations, and marketing teams.`,
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="pt-20 pb-16">
        <div className="wrap">
          <Reveal>
            <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
              Services
            </span>
            <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-6 max-w-2xl">
              One agency, every automation your team actually needs.
            </h1>
            <p className="text-textDim text-[1.05rem] max-w-[560px]">
              We design, build, and maintain AI agents around your existing
              workflow — not the other way around. Below is where most teams
              start.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="bg-surface border border-border rounded-card p-7 h-full hover:border-accent hover:-translate-y-1 transition-all duration-200">
                <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
                  {s.tag}
                </span>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-textDim text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-border">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] mb-10">
              How an engagement works
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="pt-6 border-t border-border">
                  <span className="text-textDim font-display text-sm">{p.step}</span>
                  <h3 className="font-display text-lg mt-3 mb-2">{p.title}</h3>
                  <p className="text-textDim text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap">
          <Reveal>
            <div className="flex justify-between items-end mb-10 gap-5 flex-wrap">
              <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)]">
                Ready-made agents you can start with today
              </h2>
              <Link href="/products" className="text-sm font-semibold text-accent hover:underline">
                View all agents →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  href={`/agents/${p.slug}`}
                  className="block bg-bg border border-border rounded-card p-6 h-full hover:border-accent hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-lg mb-2">{p.name}</h3>
                  <p className="text-textDim text-sm">{p.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
