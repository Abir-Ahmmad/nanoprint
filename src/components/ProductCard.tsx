"use client";

import type { Product } from "@/types"
import Image from "next/image";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";


export default function ProductCard({product}: {product: Product}) {

  const image = product.images.find((i) => i.is_default) ?.src ?? product.images[0].src;

  const {add} = useCart();

  const [added, setAdded] = useState(false);

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants.find((v) => v.is_enabled && v.is_available);
    if (!variant) return;

    add({
      variantId: variant.id,
      ProductId: product.id,
      slug: product.slug,
      title: product.title,
      variantTitle: variant.title,
      image,
      price: variant.price,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500)
    
  }



  return (
    <Link
    href={`/products/${product.slug}`}
    
    >
    <div className="group overflow-hidden rounded-lg bg-surface shadow-sm">
      <div className="relative aspect-4/5 overflow-hidden">
        <Image src={image}
        alt={product.title}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* <span className="absolute top-3 left-3 rounded-full bg-indigo-600 px-2 py-1 text-[9px] font-semibold uppercase text-white">New</span> */}

        <button 
        type="button" 
        aria-label="Add to wishlisht"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 text-gray-700 shadow transition hover:text-red-500"
        >
          <Heart/>
        </button>

        <button
        type="button"
        onClick={handleQuickAdd}
        className="absolute inset-x-3 bottom-3 translate-y-0 rounded-lg bg-slate-800/95 py-3 text-sm font-semibold text-white transition-transform duration-300 cursor-pointer lg:translate-y-[150%] lg:group-hover:translate-y-0" >
          {added ? "Added ✓" : "Quick Add"}
        </button>
      </div>

      <div className="p-3">
        <p className="text-[12px] font-semibold uppercase text-gray-500">
          {product.category}
        </p>
        <h3 className="truncate font-semibold">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-bold">
          ${(product.base_price / 100).toFixed(2)}
        </p>
      </div>

    </div>
    </Link>
  )
}
