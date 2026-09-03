import type { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function ProductGrid({
  products,
  query,
  showHeading = true,
}: {
  products: Product[];
  query?: string;
  showHeading?: boolean;
}) {
  return (
    <section id="products" className="py-20 bg-surface">
      <div className="wrap">
        {showHeading && (
          <Reveal>
            <div className="flex justify-between items-end mb-10 gap-5 flex-wrap">
              <div>
                <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] tracking-tight">
                  Choose your Solution
                </h2>
                <p className="text-textDim max-w-[420px] text-[0.95rem]">
                  Every agent is built for one job and does it well. Click any card to
                  see exactly what it does.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {products.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center text-textDim py-16 text-[0.95rem]">
            No agents match &ldquo;{query}&rdquo;. Try a different search.
          </div>
        )}
      </div>
    </section>
  );
}
