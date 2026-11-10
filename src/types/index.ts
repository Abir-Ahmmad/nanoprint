export interface ProductOptionValue {
  id: number;
  title: string;
  hex?: string;
}

export interface ProductOption {
  name: string;
  type: "color" | "size" | "model" | "finish";
  values: ProductOptionValue[];
}

export interface ProductVariant {
  id: number;
  sku: string;
  title: string;
  cost: number;   // in cents (e.g., 1250 = $12.50)
  price: number;  // in cents (e.g., 2800 = $28.00)
  is_enabled: boolean;
  is_available: boolean;
  options: number[];
}

export interface ProductSpec{
  label: string;
  value: string;
}

export interface ProductImage {
  src: string;
  variant_ids: number[];
  position: string;
  is_default: boolean;
}

export interface Product {
  id: string;
  printify_id: string;
  title: string;
  slug: string;
  description: string;
  full_description: string;
  specs: ProductSpec[];
  category: "T-Shirts" | "Hoodies" | "Sweatshirts" | "Phone Cases" | "Caps";
  category_slug: "t-shirts" | "hoodies" | "sweatshirts" | "phone-cases" | "caps";
  blueprint_id: number;
  print_provider_id: number;
  base_cost: number;
  base_price: number;
  rating: number;
  reviews_count: number;
  is_featured: boolean;
  sync_status: "synced" | "syncing" | "failed";
  options: ProductOption[];
  variants: ProductVariant[];
  images: ProductImage[];
}

export interface CartItem {
  variantId: number;
  ProductId: string;
  slug: string;
  title: string;
  variantTitle: string;
  image: string;
  price: number;
  quantity: number;
}

export interface PlacedOrder {
  orderNumber: string;
  name: string;
  email: string;
  address: string;
  shippingLabel: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: Number;
  total: number;
}