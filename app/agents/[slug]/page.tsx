import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { SITE } from "@/lib/config";

type Props = {
  params: { slug: string };
};

// Pre-render every agent page at build time — good for SEO and speed.
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const url = `${SITE.url}/agents/${product.slug}`;

  return {
    title: product.name,
    description: product.metaDescription,
    alternates: { canonical: `/agents/${product.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${product.name} | ${SITE.name}`,
      description: product.metaDescription,
      images: [{ url: product.image, width: 800, height: 500, alt: product.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${SITE.name}`,
      description: product.metaDescription,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription,
    image: product.image,
    brand: { "@type": "Brand", name: SITE.name },
    category: product.tag,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Agents", item: `${SITE.url}/#products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE.url}/agents/${product.slug}` },
    ],
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-textDim text-sm font-semibold my-9 hover:text-text transition"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to all agents
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
        <div>
          <span className="text-accent2 text-[0.78rem] font-semibold tracking-wide uppercase block mb-3.5">
            {product.tag}
          </span>
          <h1 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mb-4">{product.name}</h1>
          <p className="text-textDim text-[1.05rem] max-w-[640px]">{product.lead}</p>
        </div>
        <a
          href={product.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch us on Instagram"
          className="inline-flex items-center justify-center gap-2 self-start shrink-0 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white font-semibold text-sm px-4 py-3 rounded-xl shadow-sm hover:opacity-90 transition"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Watch Instagram
        </a>
      </div>

      <div className="relative w-full h-[100px] md:h-[490px] rounded-[18px] border border-border overflow-hidden mb-9">
        <Image src={product.image} alt={product.imageAlt} fill sizes="100vw"  priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-12 pb-20">
        <div>
          {product.body.map((par, i) => (
            <p key={i} className="mb-4.5 text-[#3c4250] text-[0.98rem]">
              {par}
            </p>
          ))}

          <h3 className="font-display text-xl mt-7 mb-3.5">Benefits</h3>
          <ul className="list-none mb-4.5">
            {product.benefits.map((b, i) => (
              <li key={i} className="flex gap-2.5 items-start py-2.5 border-b border-border text-[0.92rem] text-[#3c4250]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent2 flex-shrink-0 mt-0.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <span className="font-semibold text-foreground">{b.title}</span>
                  {b.description && <span className="text-[#3c4250]">: {b.description}</span>}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-xl mt-7 mb-3.5">What it does</h3>
          <ul className="list-none mb-4.5">
            {product.features.map((f, i) => (
              <li key={i} className="flex gap-2.5 items-start py-2.5 border-b border-border text-[0.92rem] text-[#3c4250]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent2 flex-shrink-0 mt-0.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          
        

        </div>

        <aside className="bg-surface border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24">
          <h4 className="font-display text-[1.05rem] mb-4">Quick facts</h4>
          <Row label="Setup time" value={product.setup} />
          <Row label="Category" value={product.tag} />
          <Row label="Integrations" value={product.integrations} />
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full mt-5 items-center justify-center gap-2 bg-[#25D366] text-white text-center font-semibold text-[0.92rem] py-3.5 rounded-xl hover:bg-[#1ebe5d] transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
              <path d="M12 2a9.9 9.9 0 0 0-8.55 14.9L2 22l5.25-1.38A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.11.82.83-3.03-.19-.31A8 8 0 1 1 12 20Zm4.39-5.96c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
            </svg>
            Get a Consultation
          </a>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2 py-2.5 border-b border-border text-[0.88rem]">
      <span className="text-textDim">{label}</span>
      <span>{value}</span>
    </div>
  );
}
