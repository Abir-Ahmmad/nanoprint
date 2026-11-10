"use client";

import { ChevronDown, X } from "lucide-react";
import useUpdateParams from "@/hooks/useUpdateParams";

const SORT_OPTIONS = [
  {
    value: "featured",
    label: "Featured Drops",
  },
  {
    value: "price-asc",
    label: "Price: Low to High",
  },
  {
    value: "price-desc",
    label: "Price: High to Low",
  },
  {
    value: "rating",
    label: "Top Rated",
  },
];

export default function ProductsToolbar({
  filterSlot
}: {
  filterSlot?:React.ReactNode
}) {

    const {update, searchParams, pathname, router} = useUpdateParams();


  // ----------------------------------------------------------------

  const category = searchParams?.get("category");
  const sort = searchParams?.get("sort") ?? "featured";

  // filter -------------------------------------------------------

  const chips = [
    category && { key: "category", label: `Category: ${category}` },
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <section>
      <div className="">
        <div className="my-6 flex items-center justify-between gap-3 rounded-xl bg-surface p-4 shadow-sm">

          <div className="flex items-center gap-3">
            {filterSlot}
          </div>

          {chips.length > 0 && (
            <div className="hidden lg:flex flex-wrap items-center gap-3 ">
              <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500"
              >Active:</span>
              {chips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  onClick={() => update(chip.key, null)}
                  className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium"
                >
                  {chip.label} <X size={14} />
                </button>
              ))}
              <button
                type="button"
                onClick={() => router.push(pathname)}
                className="text-sm font-medium text-indigo-600"
              >
                Clear All
              </button>
            </div>
          )}

          <div className="ml-auto flex items-center gap-2">
            

            <div className="relative  flex items-center gap-2">
              <label htmlFor="sort"
            className="text-sm text-gray-60 sm:block"
            >Sort by:</label>

            <span className="pointer-events-none flex h-9 w-9 items-center justify-center rounded-lg bg-muted md:hidden">
              <ChevronDown size={18}/>
            </span>

            <select 
            name="sort" 
            id="sort"
            value={sort}
            onChange={(e) => update("sort", e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 md:static md:h-auto md:w-auto md:opacity-100"
            >
                {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} >{o.label}</option>
                ))}
            </select>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
