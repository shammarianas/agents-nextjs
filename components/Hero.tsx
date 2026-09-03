import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <>
      <section className="relative isolate pt-[90px] pb-[70px] overflow-hidden">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10" aria-hidden="true" />
        <div className="wrap relative grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <div className="eyebrow mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse2" />
              NOW SUPPORTING END-TO-END AUTOMATION
            </div>
            <h1 className="font-display font-bold text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05] tracking-tight mb-6">
              Turn your business
              <br />
              <span className="text-accent">processes</span> into intelligent systems.
            </h1>
            <p className="text-textDim text-[1.08rem] max-w-[480px] mb-9">
              We develop customized AI automation systems that integrate with your existing business infrastructure to intelligently execute workflows, manage operations, engage customers, and keep your business running 24/7, with minimal human intervention.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#products" className="btn-primary">
                Browse agents
              </a>
              <button className="btn-ghost">See how it works</button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <InquiryForm />
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