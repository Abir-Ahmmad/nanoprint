import ProductCard from "@/components/ProductCard";
import BreadCrumb from "@/components/Products/BreadCrumb";
import FilterSidebar from "@/components/Products/FilterSidebar";
import ProductsToolbar from "@/components/Products/ProductsToolbar";
import { products } from "@/data/products";
import {
  getFilterOptions,
  getProducts,
  getPriceBounds,
  paginate,
} from "@/lib/products";
import { Suspense } from "react";
import Pagination from "@/components/Products/Pagination";
import MobileFilters from "@/components/Products/MobileFilters";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    size?: string;
    sort?: string;
    min?: string;
    max?: string;
    color?: string;
    model?: string;
    page?: string;
    q?: string;
  }>;
}) {
  const { category, size, min, max, sort, color, model, page, q } =
    await searchParams;
  const filtered = getProducts({
    category,
    size,
    min,
    max,
    model,
    sort,
    color,
    q,
  });
  const { sizes,models, colors } = getFilterOptions();
  const priceBounds = getPriceBounds();
  const paged = paginate(filtered, Number(page) || 1);

  const counts: Record<string, number> = {};
  for (const p of products) {
    counts[p.category_slug] = (counts[p.category_slug] ?? 0) + 1;
  }

  const sidebar = (<FilterSidebar sizes={sizes} colors={colors} counts={counts} models={models} priceBounds={priceBounds} />)

  return (
    <div className="bg-page pb-8">
      <div className=" container mx-auto px-4">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: q ? `Search: ${q}` : "All Products" },
          ]}
        />
        <div className="my-1 flex items-baseline gap-2">
          <h1 className="text-2xl font-bold">
            {q ? `results for "${q}"` : "All Products"}
          </h1>
          <span className="text-sm text-gray-500">
            ({filtered.length} Products)
          </span>
        </div>

        <Suspense fallback={null}>
          <ProductsToolbar 
          filterSlot={
            <MobileFilters total={filtered.length}>
              {sidebar}
            </MobileFilters>
          }
          />
        </Suspense>

        <div className="flex items-start gap-4">
          {/* sidebar ---------------------------------------------------------- */}
          <div className="static top-20 hidden self-start lg:block lg:w-64 lg:shrink-0">
            <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
              <Suspense fallback={null}>
                <FilterSidebar
                  counts={counts}
                  sizes={sizes}
                  models={models}
                  colors={colors}
                  priceBounds={priceBounds}
                />
              </Suspense>
            </div>
          </div>

          {/* Products grid ----------------------------------------------------------- */}

          {paged.items.length === 0 ? (
            <div className="flex-1 rounded-2xl bg-surface p-12 text-center">
              <p className="font-semibold">No Products founds</p>
              <p className="mt-1 text-sm text-gray-5000.">Try a different keyword or clear some filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 flex-1 gap-4 lg:grid-cols-3">
              {paged.items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        <Suspense fallback={null}>
          <Pagination
            page={paged.page}
            totalPages={paged.totalPages}
            from={paged.from}
            to={paged.to}
            total={paged.total}
          />
        </Suspense>
      </div>
    </div>
  );
}
