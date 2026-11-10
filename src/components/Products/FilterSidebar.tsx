"use client";

import useUpdateParams from "@/hooks/useUpdateParams";
// import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ColorFilter from "./ColorFilter";
import PriceRange from "./PriceRange";




const CATEGORY = [
  {
    slug: "hoodies",
    label: "Hoodies",
  },
  {
    slug: "t-shirts",
    label: "T-Shirts",
  },
  {
    slug: "sweatshirts",
    label: "Sweatshirts",
  },
  {
    slug: "phone-cases",
    label: "Phone Cases",
  },
  {
    slug: "caps",
    label: "Caps",
  },
];



type Props = {
  counts: Record <string, number>;
  sizes: string[];
  models: string[];
  colors: {title: string; hex: string} [];
  priceBounds: {min:number; max: number}
};


export default function FilterSidebar( 
  {counts, sizes,models, colors, priceBounds}: Props, 
  ) {
  const { update,toggle, searchParams, router, pathname } = useUpdateParams();
  const selected = searchParams?.get("category")?.split(",").filter(Boolean) ?? [];
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0 );
  const selectedSizes = searchParams?.get("size")?.split(",").filter(Boolean) ?? [];


  const [minVal, setMinVal] = useState(searchParams?.get("min") ?? "")
  const [maxVal, setMaxVal] = useState(searchParams?.get("max") ?? "")




  return (
    <>
      <aside className="w-64 shrink-0 rounded-xl bg-surface p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">Filters</h2>
        <button 
        type="button"
        onClick={() => {router.push(pathname, {scroll: false}); setMinVal(""); setMaxVal("")}}
        className="cursor-pointer text-xs font-semibold text-indigo-600"
        >
          Reset All
        </button>
        </div>

        {/* Category filter section ------------------------------------------------------------- */}

        <h3 className="mb-2 text-xs font-bold uppercase text-gray-500">Category</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center justify-between cursor-pointer text-sm">
              <span className="flex items-center gap-2">
                <input 
                type="checkbox" 
                checked={selected.length === 0}
                onChange={() => update("category", null)}
                />
                All Products
              </span>
              <span className="text-xs text-gray-400">{total}</span>
            </label>
          </li> 

          {CATEGORY.map((c) => (
            <li key={c.slug}>
              <label className="flex items-center justify-between cursor-pointer text-sm">
                <span className="flex items-center gap-2">
                  <input 
                  type="checkbox" 
                  checked = {selected.includes(c.slug)}
                  onChange={() => toggle("category", c.slug)}
                  />
                  {c.label}
                </span>
                <span className="text-xs text-gray-400">
                  {counts[c.slug] ?? 0}
                </span>
              </label>
            </li>
          ))}

        </ul>

        {/* Range filter section ------------------------------------------------------------- */}


          {/* <div className="mt-6">
            <PriceRange bounds={priceBounds}/>
          </div> */}
        

        <h3 className="mb-2 mt-6 text-xs font-bold uppercase text-gray-500"> Price Range</h3>
        <div className="flex items-center gap-2">
          <input 
          type="number"
          min= {priceBounds.min}
          max= {priceBounds.max}
          placeholder={`$${priceBounds.min}`}
          value={minVal}
          onChange={(e) => setMinVal(e.target.value)}
          onBlur={() => update("min", minVal || null)}
          className="w-full rounded-lg bg-muted px-3 py-3 text-sm"
          />
          <span></span>
          <input 
          type="number"
          min= {priceBounds.min}
          max= {priceBounds.max}
          placeholder={`$${priceBounds.max}`}
          value={maxVal}
          onChange={(e) => setMaxVal(e.target.value)}
          onBlur={() => update("max", maxVal || null)}
          className="w-full rounded-lg bg-muted px-3 py-3 text-sm"
          />
        </div>
        
        
        {/* sizes filter section ------------------------------------------------------------- */}

        <h3 className="mb-2 mt-6 text-xs font-bold uppercase text-gray-500">Fit/Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((s) => {
            const active = selectedSizes.includes(s)
            return (
              <button 
              key={s}
              type="button"
              onClick={() => toggle("size", s)}
              className={`rounded-lg py-2 text-sm font-medium transition ${active ?
                "bg-indigo-600 text-white" :
                "bg-gray-100 dark:bg-muted text-gray-700 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-900"
              }`}
              >
                {s}
              </button>
            )
          })}
        </div>

        {/* Color filter section ------------------------------------------------------------- */}

        <div className="mt-6">
          <ColorFilter colors={colors}/>
        </div>

      </aside>
    </>
  );
}
