import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn what ${SITE.name} does, how we build AI automation agents, and why teams trust us to handle their operational workflows.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Built for real workflows",
    body: "We don't ship generic chatbots. Every agent is built around the specific way your team already works.",
  },
  {
    title: "Reliability over hype",
    body: "Guardrails, audit trails, and human approval steps come standard — not as an afterthought.",
  },
  {
    title: "You keep ownership",
    body: "Everything we build runs inside your own stack and stays yours, not locked into a platform.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pt-20 pb-16">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
              About {SITE.name}
            </span>
            <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-6">
              We build the automation layer teams actually trust.
            </h1>
            <p className="text-textDim text-[1.05rem] max-w-[520px]">
              {SITE.name} started with a simple observation: most teams don&apos;t
              need another dashboard or another chatbot. They need the repetitive,
              rule-based parts of their job to just happen — reliably, with a
              human still in the loop wherever it matters. That&apos;s the only
              thing we build.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-[320px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/seed/rovix-about/800/600"
                alt="Rovix team working on an automation workflow"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-7 mb-16">
        <Reveal>
          <div className="wrap flex justify-between flex-wrap gap-5">
            <Stat value="2022" label="founded" />
            <Stat value="40+" label="agents shipped" />
            <Stat value="120k" label="tasks automated / month" />
            <Stat value="99.2%" label="task accuracy" />
          </div>
        </Reveal>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] mb-10">
              What we believe
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="bg-surface border border-border rounded-card p-6 h-full hover:border-accent hover:-translate-y-1 transition-all duration-200">
                  <h3 className="font-display text-lg mb-2">{v.title}</h3>
                  <p className="text-textDim text-sm">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <Reveal>
            <div className="bg-[#0f1420] text-white rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl mb-2">
                  Want to see if this fits your team?
                </h2>
                <p className="text-white/55 text-sm">
                  A free 45-minute strategy review, no obligation.
                </p>
              </div>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition whitespace-nowrap"
              >
                Book a call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <b className="font-display text-[1.6rem] block">{value}</b>
      <span className="text-textDim text-sm">{label}</span>
    </div>
  );
}
