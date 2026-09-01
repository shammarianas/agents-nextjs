import Reveal from "@/components/Reveal";
import { PROCESS_LAYERS } from "@/lib/homeContent";

export default function ProcessLayers() {
  return (
    <section className="py-24 bg-[#0f1420] text-white">
      <div className="wrap">
        <Reveal>
          <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
            Built for reliability
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] max-w-2xl mb-4 leading-tight">
            This isn&apos;t a chatbot. It&apos;s a governed automation layer.
          </h2>
          <p className="text-white/55 max-w-xl mb-14">
            The most common concern we hear is &ldquo;what if the AI gets it
            wrong?&rdquo; That&apos;s the right question — here&apos;s why the
            architecture makes it reliable in practice.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_LAYERS.map((layer, i) => (
            <Reveal key={layer.number} delay={i * 100}>
              <div className="relative pt-6 border-t border-white/15">
                <span className="text-white/30 font-display text-sm">{layer.number}</span>
                <h3 className="font-display text-lg mt-3 mb-2">{layer.title}</h3>
                <p className="text-white/55 text-sm">{layer.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
