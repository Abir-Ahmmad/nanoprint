"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  const { count, openCart } = useCart();

  return (
    <div>
      <button
        onClick={openCart}
        type="button"
        aria-label={`Cart, ${count} items`}
        className="hover:cursor-pointer relative"
      >
        <ShoppingCart size={22} />
        {count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
