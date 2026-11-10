"use client";

import { useCart } from "@/context/CartContext";
import { fmt } from "@/lib/checkout";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  shipping: number;
  discount: number;
  total: number;
  promo: string;
  setPromo: (v: string) => void;
  appliedCode: string | null;
  promoError: string;
  onApply: () => void;
  onRemovePromo: () => void;
  submitting: boolean;
};

export default function OrderSummary(p: Props) {
  const { items, subtotal, setQty, remove } = useCart();

  return (
    <aside className="rounded-2xl border border-indigo-100 bg-muted/50 p-5 lg:sticky lg:top-24">
      <h2 className="mb-4 text-lg font-bold">Order Summary</h2>

      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.variantId} className="flex gap-3 rounded-xl bg-surface p-3">
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={it.image}
                alt={it.title}
                fill
                sizes="80px "
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{it.title}</p>
              <p className="text-xs text-gray-500">{it.variantTitle}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center rounded-md border border-line">
                  <button
                    type="button"
                    aria-label="Decrease"
                    onClick={() => setQty(it.variantId, it.quantity - 1)}
                    className="p-1"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-xs">{it.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase"
                    onClick={() => setQty(it.variantId, it.quantity + 1)}
                    className="p-1"
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <span className="text-sm font-bold">
                  {" "}
                  {fmt(it.price * it.quantity)}
                </span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Remove"
              onClick={() => remove(it.variantId)}
              className="self-start text-gray-400 hover:text-red-500"
            ></button>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-indigo-100 pt-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-gray-500">
          Promo Code
        </p>
        <div className="flex gap-2">
          <input
            onChange={(e) => p.setPromo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                p.onApply();
              }
            }}
            value={p.promo}
            placeholder="DROP042"
            className="min-w-0 felx-1 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm uppercase outline-none focus:border-indigo-600"
          />
          <button
            type="button"
            onClick={p.onApply}
            className="rounded-lg bg-slate-800 px-4 text-sm font-semibold text-white"
          >
            {p.appliedCode ? "Applied" : "Apply"}
          </button>
        </div>

        {p.promoError && (
          <p className="mt-2 text-xs text-red-600 "> {p.promoError}</p>
        )}

        {p.appliedCode && (
          <div className="mt-2 flex items-center justify-between rounded-lg bg-indigo-100 px-3 py-2 text-xs font-semibold text-indigo-800">
            {p.appliedCode} applied
            <button
              type="button"
              aria-label="Remove code"
              onClick={p.onRemovePromo}
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>

      <dl className="mt-5 space-y-2 border-t border-indigo-100 pt-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-600"> Merchandise Subtotal</dt>
          <dd className="font-medium">{fmt(subtotal)}</dd>
        </div>

        {p.discount > 0 && (
          <div className="flex justify-between text-indigo-700">
            <dt>Promo Discount</dt>
            <dd>-{fmt(p.discount)}</dd>
          </div>
        )}

        <div className="flex justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd className={
              p.shipping === 0 ? "font-bold text-amber-500" : "font-medium"}
          >
            {p.shipping === 0 ? "FREE ($0.00)" : fmt(p.shipping)}
          </dd>
        </div>

      </dl>

      <div className="mt-4 flex items-end justify-between border-t border-indigo-100 pt-4">
        <span className="text-lg font-bold">Total Due</span>
        <span className="text-3xl font-extrabold text-indigo-600">{fmt(p.total)}</span>
      </div>

      
      <button
      type="submit"
      disabled={p.submitting || items.length === 0}
      className="mt-5 w-full cursor-pointer rounded-xl bg-indigo-600 py-3.5 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {p.submitting ? "Placing order..." : `Place Order - ${fmt(p.total)}`}
      </button>
      
    </aside>
  );
}
