"use client";

import { CartItem } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";





type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  remove: (varianId: number) => void;
  setQty: (variantId: number, qty: number) => void;
  clear: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const KEY = "cart-v1";

export default function CartProvider({children} : {children: ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  },[]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((n, i) => n + i.quantity, 0),
    subtotal: items.reduce((s, i) => s + i.price * i.quantity, 0),

    add: (item, qty = 1) =>
      setItems((prev) => {
        const found = prev.find((i) => i.variantId === item.variantId);
        if (found)
          return prev.map((i) =>
            i.variantId === item.variantId
              ? { ...i, quantity: i.quantity + qty }
              : i,
          );
        return [...prev, { ...item, quantity: qty }];
      }),

    remove: (id) => setItems((prev) => prev.filter((i) => i.variantId !== id)),

    setQty: (id, qty) =>
      setItems((prev) =>
        qty <= 0
          ? prev.filter((i) => i.variantId !== id)
          : prev.map((i) => (i.variantId === id ? { ...i, quantity: qty } : i)),
      ),

    clear: () => setItems([]),

    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),


  }), [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export function useCart() {
    const ctx = useContext(CartContext);
    if(!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}