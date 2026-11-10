"use client";

import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const fmt = (cents: number) => `$${(cents / 100).toFixed(2)}`;

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, setQty, remove } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-70 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <aside
          role="dialig"
          aria-modal="true"
          aria-label="Shopping Cart"
          onClick={(e) => e.stopPropagation()}
          className={`fixed right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button
              type="button"
              aria-label="Close cart"
              onClick={closeCart}
              className="cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-gray-500">
              <ShoppingBag size={40} />
              <Link
                href="/products"
                onClick={closeCart}
                className="font-medium text-indigo-600"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
                {items.map((item) => (
                  <li key={item.variantTitle} className="flex gap-3">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="block truncate text-sm font-semibold"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {item.variantTitle}
                      </p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              setQty(item.variantId, item.quantity - 1)
                            }
                            className="p-1.5 cursor-pointer"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setQty(item.variantId, item.quantity + 1)
                            }
                            className="p-1.5 cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-bold">
                          {fmt(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-label="Remove Item"
                      onClick={() => remove(item.variantId)}
                      className="self-start text-gray-400 hover:text-red-500 cursor-pointer mt-1 mr-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="border-t border-line px-5 py-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-lg font-bold">{fmt(subtotal)}</span>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white"
                >
                  <button
                    type="button"
                    className="w-full cursor-pointer rounded-xl bg-indigo-600 font-semibold text-white "
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
