import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Products",
  description: `Browse every ready-made AI automation agent ${SITE.name} offers, for sales, support, operations, and marketing.`,
  alternates: { canonical: "/products" },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = (searchParams.q ?? "").trim().toLowerCase();

  const filtered = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tag.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query)
      )
    : PRODUCTS;

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const requestedPage = Number.parseInt(searchParams.page ?? "1", 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (searchParams.q) params.set("q", searchParams.q);
    params.set("page", String(page));
    return `/products?${params.toString()}`;
  };

  return (
    <main>
      <section className="pt-20 pb-10">
        <div className="wrap">
          <Reveal>
            <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
              Products
            </span>
            <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-4 max-w-2xl">
               Choose an AI agent. Put your automation on autopilot.
            </h1>
            <p className="text-textDim text-[1.05rem] max-w-[520px]">
              Explore purpose-built AI automation designed to handle repetitive tasks, streamline business workflows, and help your team get more done. Pick the right automation, connect it to your workflow, and let intelligent automation take care of the busywork.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductGrid
        products={paginatedProducts}
        query={searchParams.q}
        showHeading={false}
      />
      {totalPages > 1 && (
        <nav className="bg-surface pb-20" aria-label="Product pages">
          <div className="wrap flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <a
                  key={page}
                  href={pageHref(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors ${
                    page === currentPage
                      ? "border-accent bg-accent text-white"
                      : "border-line hover:border-accent hover:text-accent"
                  }`}
                >
                  {page}
                </a>
              )
            )}
          </div>
        </nav>
      )}
    </main>
  );
}
