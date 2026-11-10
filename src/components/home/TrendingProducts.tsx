import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import Link from "next/link";

type Navtype = {
  id: number,
  label: string,
  link: string
}

const filterNav : Navtype[] = [
  {
    id: 1,
    label: "All Items",
    link: "/products"
  },
  {
    id: 2,
    label: "Hoodies",
    link: "/products?category=hoodies"
  },
  {
    id: 3,
    label: "Sweateshirts",
    link: "/products?category=sweatshirts"
  },
  {
    id: 4,
    label: "Phone Cases",
    link: "/products?category=phone-cases"
  },

]


export default function TrendingProducts({
  products,
}: {
  products: Product[];
}) {
  return (
    <section>
      <div className="container mx-auto p-4">
        <div className="md:flex items-center justify-between">
          <div >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <p className="text-[12px] text-blue-600 font-semibold">
                HIGH DEMAND
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4">Trending Products</h2>
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-4 bg-muted p-3 rounded-lg ">
              {filterNav.map((item) => (
                <li key={item.id}
                >
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.map((Item) => (
            <ProductCard key={Item.id} product={Item} />
          ))}
        </div>
      </div>
    </section>
  );
}
