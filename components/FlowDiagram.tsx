export default function FlowDiagram() {
  return (
    <div className="relative h-[380px] bg-surface border border-border rounded-[20px] p-7 order-first md:order-none">
      <svg viewBox="0 0 340 320" className="w-full h-full" role="img" aria-label="Diagram of an automation agent workflow: trigger, agent, decide, log data, notify team">
        <path className="stroke-accent stroke-2 fill-none [stroke-dasharray:6_6] animate-dash" d="M60 60 L170 60" />
        <path className="stroke-border stroke-2 fill-none" d="M170 60 L170 150" />
        <path className="stroke-accent stroke-2 fill-none [stroke-dasharray:6_6] animate-dash" d="M170 150 L280 150" />
        <path className="stroke-border stroke-2 fill-none" d="M170 150 L60 220" />
        <path className="stroke-accent stroke-2 fill-none [stroke-dasharray:6_6] animate-dash" d="M170 150 L280 240" />

        <rect className="fill-accent/10 stroke-accent stroke-[1.5]" x="20" y="38" width="80" height="44" rx="10" />
        <text className="fill-text font-body text-[11px] font-semibold" x="34" y="64">Trigger</text>

        <rect className="fill-surface2 stroke-border stroke-[1.5]" x="130" y="128" width="80" height="44" rx="10" />
        <text className="fill-text font-body text-[11px] font-semibold" x="148" y="154">Agent</text>

        <rect className="fill-accent/10 stroke-accent stroke-[1.5]" x="240" y="128" width="80" height="44" rx="10" />
        <text className="fill-text font-body text-[11px] font-semibold" x="253" y="154">Decide</text>

        <rect className="fill-surface2 stroke-border stroke-[1.5]" x="20" y="198" width="80" height="44" rx="10" />
        <text className="fill-textDim font-body text-[11px]" x="35" y="224">Log data</text>

        <rect className="fill-accent/10 stroke-accent stroke-[1.5]" x="240" y="218" width="80" height="44" rx="10" />
        <text className="fill-textDim font-body text-[11px]" x="250" y="244">Notify team</text>
      </svg>
    </div>
  );
}
