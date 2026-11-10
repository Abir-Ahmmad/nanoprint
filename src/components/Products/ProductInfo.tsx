"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";
import { ArrowRight, Minus, Plus, Star } from "lucide-react";

import { useRouter } from "next/navigation";
import ProductDetails from "./ProductDetails";


const fmt = (cents: number) => `$${(cents / 100).toFixed(2)}`;

export default function ProductInfo({ product }: { product: Product }) {
  const { add, openCart } = useCart();

  const colorOpt = product.options.find((o) => o.type === "color");
  const sizeOpt = product.options.find((o) => o.type === "size");

  const [colorId, setColorId] = useState<number | undefined>(
    colorOpt?.values[0]?.id,
  );
  const [sizeId, setSizeId] = useState<number | undefined>(undefined);
  const [qty, setQty] = useState(1);

  const selected = [colorId, sizeId].filter(
    (v): v is number => v !== undefined,
  );
  const needed = [colorOpt, sizeOpt].filter(Boolean).length;

  const variant =
    selected.length === needed
      ? product.variants.find(
          (v) => v.is_enabled && selected.every((id) => v.options.includes(id)),
        )
      : undefined;

  function sizeAvailable(id: number) {
    return product.variants.some(
      (v) =>
        v.is_enabled &&
        v.is_available &&
        v.options.includes(id) &&
        (colorId === undefined || v.options.includes(colorId)),
    );
  }

  const router = useRouter();

  function handleAdd() {
    if (addToCart()) openCart();
  }

    function handleBuyNow () {
    if (addToCart()) router.push("/checkout");
  }

  const price = variant?.price ?? product.base_price;
  const canAdd = !!variant && variant.is_available;


  function addToCart() {
    if (!variant || !variant.is_available) return false;
    const image = 
    product.images.find((i) => i.variant_ids.includes(variant.id))?.src ?? product.images[0]?.src ??
    "";

    add(
      {
        variantId: variant.id,
        ProductId: product.id,
        slug: product.slug,
        title: product.title,
        variantTitle: variant.title,
        image,
        price: variant.price,
      },
      qty,
    );
    return true;
  }




  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {product.category}
      </p>
      <h1 className="mt-1 text-[20px] lg:text-3xl font-bold">{product.title}</h1>

      <div className="mt-2 flex items-center gap-2 text-sm">
        <Star size={16} className="fill-amber-400 text-amber-400" />
        <span className="font-semibold">{product.rating}</span>
        <span className="text-gray-500">({product.reviews_count} reviews)</span>
      </div>

      <p className="mt-4 text-[18px] lg:text-3xl font-bold">{fmt(price)}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>

      {colorOpt && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold">
            Color:{" "}
            <span className="font-normal text-gray-600">
              {colorOpt.values.find((v) => v.id === colorId)?.title.trim()}
            </span>
          </p>
          <div className="flex gap-3">
            {colorOpt?.values.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-label={c.title.trim()}
                aria-pressed={colorId === c.id}
                onClick={() => setColorId(c.id)}
                style={{ backgroundColor: c.hex }}
                className={`h-9 w-9 rounded-full border border-black/10 ${
                  colorId === c.id
                    ? "ring-2 ring-indigo-600 ring-offset-2 "
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {sizeOpt && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold">Select Size</p>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
            {sizeOpt.values.map((s) => {
              const ok = sizeAvailable(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  disabled={!ok}
                  onClick={() => setSizeId(s.id)}
                  className={`rounded-lg py-2.5 text-sm font-medium ${
                    sizeId === s.id
                    ? "bg-indigo-600 text-white dark:text-gray-800"
                    : "bg-surface text-gray-800 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-gray-400"
                  }  disabled:cursor-not-allowed disabled:text-gray-300 disabled:dark:text-gray-700 disabled:line-through `}
                >
                    {s.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-line bg-surface">
            <button
            type="button"
            aria-label="Decrease"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="p-3"
            >
                <Minus size={14} /> 
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button
            type="button"
            aria-label="Increase"
            onClick={() => setQty((q) => Math.max(1, q + 1))}
            className="p-3"
            >
                <Plus size={14} /> 
            </button>
        </div>

        <button
        type="button"
        onClick={handleAdd}
        disabled={!canAdd}
        className="flex-1 cursor-pointer rounded-xl bg-indigo-600 py-3.5 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
            {canAdd
            ?  `Add to Cart - ${fmt(price * qty)}`
            : sizeOpt && sizeId === undefined
                ? "Select a size"
                : "Unavailable"}
        </button>
      </div>

    <button
    type="button"
    onClick={handleBuyNow}
    disabled={!canAdd}
    className="mt-3  flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-800 py-3.5 font-semibold text-white hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
        Buy It Now with One-Click <ArrowRight size={16} />
    </button>

    <ProductDetails product={product} />

    </div>
  );
}
