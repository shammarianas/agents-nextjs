import Reveal from "@/components/Reveal";
import { HOW_WE_WORK } from "@/lib/homeContent";

const ICONS: Record<string, JSX.Element> = {
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 5-5" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 2v4M15 2v4M7 8h10l-1 5a4 4 0 0 1-4 3.5A4 4 0 0 1 8 13z" />
      <path d="M12 16.5V21" />
    </svg>
  ),
};

export default function HowWeWork() {
  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="wrap">
        <Reveal>
          <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
            What to expect
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] mb-10">
            How we work
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_WE_WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="bg-bg border border-border rounded-card p-6 h-full hover:border-accent hover:-translate-y-1 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 [&_svg]:w-5 [&_svg]:h-5">
                  {ICONS[item.icon]}
                </div>
                <h3 className="font-display text-base mb-2">{item.title}</h3>
                <p className="text-textDim text-sm">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
