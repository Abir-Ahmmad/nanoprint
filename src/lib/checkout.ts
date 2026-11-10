export const SHIPPING_METHODS = [
  {
    id: "standard",
    label: "Standard Tracked Print & Courier",
    desc: "Delivery in 3-5 business days",
    price: 0,
  },
  {
    id: "express",
    label: "Express Priority POD Dispatch",
    desc: "Delivery in 1–2 business days",
    price: 1200,
  },
] as const;


export const PROMO_CODES: Record <string, number> = {DROP042: 0.1};

export const fmt = (cents: number) => `$${(cents / 100).toFixed(2)}`