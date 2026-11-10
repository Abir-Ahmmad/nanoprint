"use client";

import useUpdateParams from "@/hooks/useUpdateParams";
import { SlidersHorizontal, X } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";

const FILRTER_KEY = ["category", "size", "color", "model", "min", "max"];

export default function MobileFilters({
  children,
  total,
}: {
  children: ReactNode;
  total: number;
}) {
  const [open, setOpen] = useState(false);
  const { searchParams } = useUpdateParams();

  const activeCount = FILRTER_KEY.filter((k) => searchParams?.get(k)).length;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);





  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium lg:hidden"
      >
        <SlidersHorizontal size={16} />
        Filters
        {activeCount > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[11px] font-bold text-white">
            {activeCount}
          </span>
        )}
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-70 bg-black/40 transition-[opacity, visibility] duration-300 lg:hidden ${
          open ? "opacity-100 visible" : " invisible opacity-0"
        }`}
      />
        <div
          role="dialog"
          aria-label="Filters"
          aria-modal="true"
          className={`fixed inset-y-0 left-0 z-80 flex max-w-75 w-[85%] flex-col rounded-t-2xl bg-surface shadow-2xl transition-[transform, visibility] duration-300 ease-out lg:hidden ${
            open ? "translate-x-0 visible" : "-translate-x-full invisible"
          }`}
        >
          <div className="flex items-center justify-between border-b border-orange-200 px-5 py-4 ">
            <h2 className="font-semibold">Filter</h2>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">{children}</div>

          <div className="border-t border-line p-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full cursor-pointer rounded-xl bg-indigo-600 py-3 font-semibold text-white"
            >
              Show {total} results
            </button>
          </div>
        </div>
      
    </>
  );
}
