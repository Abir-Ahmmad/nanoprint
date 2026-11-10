import { products } from "@/data/products";

export function getProducts({
  category,
  size,
  sort,
  min,
  max,
  color,
  model,
  q,
}: {
  category?: string;
  sort?: string;
  size?: string;
  min?: string;
  max?: string;
  color?: string;
  model?: string;
  q?: string;
}) {
  let result = [...products];

  if (category) {
    const list = category.split(",");
    result = result.filter((p) => list.includes(p.category_slug));
  }

  if (size) {
    const list = size.split(",");
    result = result.filter((p) =>
      p.variants.some(
        (v) =>
          v.is_enabled &&
          v.is_available &&
          v.title.split("/").some((part) => list.includes(part.trim())),
      ),
    );
  }

  if (color) {
    const list = color.split(",");
    result = result.filter((p) =>
      p.options.some(
        (o) =>
          o.type === "color" &&
          o.values.some((v) => list.includes(v.title.trim())),
      ),
    );
  }

  const minCents = min ? Number(min) * 100 : 0;
  const maxCents = max ? Number(max) * 100 : Infinity;

  if (min || max) {
    result = result.filter(
      (p) => p.base_price >= minCents && p.base_price <= maxCents,
    );
  }

  if (q) {
    const term = q.trim().toLocaleLowerCase();
    result = result.filter((p) =>
      [p.title, p.description, p.category].some((field) =>
        field.toLocaleLowerCase().includes(term),
      ),
    );
  }

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.base_price - b.base_price);
      break;
    case "price-desc":
      result.sort((a, b) => b.base_price - a.base_price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      result.sort((a, b) => Number(b.is_featured) - Number(a.is_featured));
  }

  return result;
}

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL"];

export function getFilterOptions() {
  const sizes = new Set<string>();
  const models = new Set<string>();
  const colors = new Map<string, string>();

  for (const p of products) {
    for (const opt of p.options) {
      if (opt.type === "size") opt.values.forEach((v) => sizes.add(v.title));
      if (opt.type === "model") opt.values.forEach((v) => models.add(v.title.trim()));
      if (opt.type === "color")
        opt.values.forEach((v) => v.hex && colors.set(v.title.trim(), v.hex));
    }
  }
  return {
    sizes: [...sizes].sort(
      (a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b),
    ),
    models: [...models],
    colors: [...colors].map(([title, hex]) => ({ title, hex })),
  };
}

export function getPriceBounds() {
  const prices = products.map((p) => p.base_price);
  return {
    min: Math.floor(Math.min(...prices) / 100),
    max: Math.ceil(Math.max(...prices) / 100),
  };
}

export const PAGE_SIZE = 9;
export function paginate<T>(items: T[], page: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * PAGE_SIZE;

  return {
    items: items.slice(start, start + PAGE_SIZE),
    page: current,
    totalPages,
    total: items.length,
    from: items.length ? start + 1 : 0,
    to: Math.min(start + PAGE_SIZE, items.length),
  };
}

export function searchProducts(q: string, limit = 3) {
  const term = q.trim().toLocaleLowerCase();
  if (!term) return [];
  return products.filter((p) =>
    [p.title, p.description, p.category].some((f) =>
      f.toLocaleLowerCase().includes(term),
    ),
  )
  .slice(0, limit);
}


export function countMatches(q: string) {
  const term = q.trim().toLocaleLowerCase();
  if (!term) return 0;
  return products.filter((p) =>
    [p.title, p.description, p.category].some((f) =>
      f.toLocaleLowerCase().includes(term),
    ),
  )
  .length;
}

