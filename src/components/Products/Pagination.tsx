"use client";

import useUpdateParams from "@/hooks/useUpdateParams";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  from: number;
  to: number;
  total: number;
};

function getPageList(page: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set([1, total, page - 1, page, page + 1]);
  const sorted = [...pages]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) result.push("...");
    result.push(n);
  });

  return result;
}

export default function Pagination({
  page,
  totalPages,
  from,
  to,
  total,
}: Props) {
  const { setPage } = useUpdateParams();

  if (total === 0) return null;

  const base =
    "flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition";

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex flex-wrap items-center justify-center md:justify-between gap-4 rounded-2xl bg-surface px-6 py-4 shadow-sm"
    >
      <p className="text-sm hidden md:flex text-gray-500">
        Showing
        <span className="font-semibold mx-1.5 text-ink">
          {from} - {to}
        </span>
        {/* of <span className="font-semibold text-ink">{total}</span> drop
        styles */}
        of All Products
      </p>
      <div className="flex items-center gap-2 justify-between">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className={`${base} gap-1 bg-muted text-gray-700 enabled:hover:bg-indigo-100  disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer dark:text-gray-500`}
        >
          <ArrowLeft size={14} /> Prev
        </button>

        {getPageList(page, totalPages).map((n, i) =>
          n === "..." ? (
            <span key={`dots-${i}`} className="px-1 text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={n}
              type="button"
              aria-current={n === page ? "page" : undefined}
              onClick={() => setPage(n)}
              className={`${base} ${
                n === page
                  ? "bg-indigo-600 text-white "
                  : "bg-muted text-gray-700 dark:text-gray-400 cursor-pointer hover:bg-indigo-100"
              }`}
            >
              {n}
            </button>
          ),
        )}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className={`${base} gap-1 bg-muted text-gray-800 dark:text-gray-400 enabled:hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer`}
        >
          Next <ArrowRight size={14} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="whitespace-nowrap hidden  md:flex items-center gap-2 bg-indigo-100 dark:bg-indigo-500 py-2 px-4 rounded-lg cursor-pointer"
      >
        Back to top <ArrowUp size={14} />
      </button>
    </nav>
  );
}
