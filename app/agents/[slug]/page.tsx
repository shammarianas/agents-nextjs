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

      <span className="text-accent2 text-[0.78rem] font-semibold tracking-wide uppercase block mb-3.5">
        {product.tag}
      </span>
      <h1 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mb-4">{product.name}</h1>
      <p className="text-textDim text-[1.05rem] max-w-[640px] mb-10">{product.lead}</p>

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
          
        

          {/* <div className="grid grid-cols-2 gap-3 mt-7">
            {product.gallery.map((img, i) => (
              <div key={i} className="relative h-[130px] rounded-xl border border-border overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div> */}
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
            className="block w-full mt-5 bg-accent text-white text-center font-semibold text-[0.92rem] py-3.5 rounded-xl hover:opacity-90 transition"
          >
            Book a demo
          </a>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-border text-[0.88rem]">
      <span className="text-textDim">{label}</span>
      <span>{value}</span>
    </div>
  );
}
