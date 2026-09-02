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
            Connect Your Tools. Automate the Work.
          </h2>
          <p className="text-textDim max-w-lg mb-10">
            Bring your business apps, platforms, and systems together with AI-powered automation. Our AI agents connect with the tools your team already uses, trigger actions, move data, update records, and complete repetitive tasks automatically.
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