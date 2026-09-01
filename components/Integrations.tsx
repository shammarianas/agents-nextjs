import Reveal from "@/components/Reveal";
import ToolLogo from "@/components/ToolLogo";
import { TOOLS } from "@/lib/homeContent";

export default function Integrations() {
  return (
    <section className="py-20 border-t border-border">
      <div className="wrap">
        <Reveal>
          <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
            Integrations
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] max-w-xl mb-4 leading-tight">
            Your tools stay. The manual work disappears.
          </h2>
          <p className="text-textDim max-w-lg mb-10">
            We build into whatever your team already uses — from everyday apps
            to complex enterprise systems. If it has an API, we can connect it.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3.5">
            {TOOLS.map((tool, i) => (
              <div key={tool.slug} style={{ transitionDelay: `${i * 25}ms` }}>
                <ToolLogo name={tool.name} slug={tool.slug} />
              </div>
            ))}
            <div
              className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl border border-dashed border-border flex items-center justify-center text-textDim text-xs font-semibold text-center px-1"
            >
              + any API
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}