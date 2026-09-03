import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/agents/${product.slug}`} className="card block">
      <div className="relative h-[190px] w-full bg-surface2">
        <Image
          src={product.cardImage}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 pb-6">
        <span className="text-[0.72rem] font-semibold tracking-wide uppercase text-accent2 block mb-2">
          {product.tag}
        </span>
        <h3 className="font-display text-lg mb-2">{product.name}</h3>
        <p className="text-textDim text-sm mb-3.5">{product.tagline}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold group">
          View details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
