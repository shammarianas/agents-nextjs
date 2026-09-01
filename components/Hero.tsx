import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <>
      <section className="pt-[90px] pb-[70px] overflow-hidden">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <div className="eyebrow mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse2" />
              Now supporting multi-step workflows
            </div>
            <h1 className="font-display font-bold text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05] tracking-tight mb-6">
              AI automation
              <br />
              <span className="text-accent">agents</span> that run your busywork.
            </h1>
            <p className="text-textDim text-[1.08rem] max-w-[480px] mb-9">
              Rovix builds ready-to-deploy AI agents that handle outreach, support,
              data entry and reporting — so your team can focus on the work that
              actually needs a human.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#products" className="btn-primary">
                Browse agents
              </a>
              <button className="btn-ghost">See how it works</button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <FlowDiagram />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-7">
        <Reveal>
          <div className="wrap flex justify-between flex-wrap gap-5">
            <Stat value="40+" label="ready-made agents" />
            <Stat value="120k" label="tasks automated / month" />
            <Stat value="6 min" label="average setup time" />
            <Stat value="99.2%" label="task accuracy" />
          </div>
        </Reveal>
      </section>
    </>
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
