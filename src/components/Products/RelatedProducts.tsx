import Link from "next/link";
import ProductCard from "../ProductCard";
import type { Product } from "@/types";

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between"> 
        <h2 className="text-[18px] lg:text-2xl font-bold">Complete the Fit - you May Also Like</h2>
        <Link href="/products" className="text-sm hidden md:flex font-medium text-indigo-600">
          Explore Entire Catalog →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
