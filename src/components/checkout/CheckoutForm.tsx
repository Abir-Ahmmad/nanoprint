"use client";

import { useCart } from "@/context/CartContext";
import { PROMO_CODES, SHIPPING_METHODS } from "@/lib/checkout";
import type { PlacedOrder } from "@/types";
import ContactForm from "./ContactForm";
import ShippingForm from "./ShippingForm";
import ShippingMethod from "./ShippingMethod";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();

  const [shippingId, setShippingId] = useState<string>("standard");
  const [promo, setPromo] = useState("");
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const method = SHIPPING_METHODS.find((m) => m.id === shippingId)!;
  const rate = appliedCode ? PROMO_CODES[appliedCode] : 0;
  const discount = Math.round(subtotal * rate);
  const shipping = method.price;
  const total = Math.max(0, subtotal - discount + shipping);

  function applyPromo() {
    const code = promo.trim().toUpperCase();

    if (PROMO_CODES[code]) {
      setAppliedCode(code);
      setPromoError("");
    } else {
      setAppliedCode(null);
      setPromoError("Invalid promo code");
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0 || submitting) return;
    setSubmitting(true);

    const f = new FormData(e.currentTarget);

    const order: PlacedOrder = {
      orderNumber: `NP-${Date.now().toString().slice(-6)}`,
      email: String(f.get("email") ?? ""),
      name: `${f.get("firstName") ?? ""} ${f.get("lastName") ?? ""}`.trim(),
      address: [
        f.get("street"),
        f.get("apt"),
        f.get("city"),
        f.get("state"),
        f.get("zip"),
      ]
        .filter(Boolean)
        .join(", "),
      shippingLabel: method.label,
      items,
      subtotal,
      shipping,
      discount,
      total,
    };

    try {
      sessionStorage.setItem("last-order", JSON.stringify(order));
    } catch {}

    setTimeout(() => {
      clear();
      router.push("/order-success");
    }, 700);
  }

  if (items.length === 0 && !submitting) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-surface p-10 text-center shadow-sm">
        <ShoppingBag className="mx-auto text-gray-400" size={40} />
        <p>Your bag is empty</p>
        <Link
          href="/products"
          className="mt-2 inline-block text-sm font-medium text-indigo-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]"
      >
        <div className="min-w-0 space-y-6">
          <ContactForm />
          <ShippingForm />
          <ShippingMethod value={shippingId} onChange={setShippingId} />
          <PaymentForm />
        </div>

        <OrderSummary
          shipping={shipping}
          discount={discount}
          total={total}
          promo={promo}
          setPromo={setPromo}
          appliedCode={appliedCode}
          promoError={promoError}
          onApply={applyPromo}
          onRemovePromo={() => {
            setAppliedCode(null);
            setPromo("");
          }}
          submitting={submitting}
        />
      </form>
    </div>
  );
}
