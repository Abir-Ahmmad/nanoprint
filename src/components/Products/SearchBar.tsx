"use client";

import { countMatches, searchProducts } from "@/lib/products";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const DELAY = 250;
const fmt = (cents: number) => `$${(cents / 100).toFixed(2)}`;

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQ = searchParams.get("q") ?? "";

  const [value, setValue] = useState(urlQ);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

  const pathname= usePathname()


  useEffect(() => {
    setValue(urlQ);
    setOpen(false);

  }, [urlQ, pathname])


  useEffect(() => {
    setValue(urlQ);
  }, [urlQ]);

  useEffect(() => {
    const t = setTimeout(() => setQuery(value), DELAY);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const results = searchProducts(query, 3);
  const total = countMatches(query);
  const showPanel = open && query.trim().length > 0;

  function goToResults() {
    const q = value.trim();
    setOpen(false);
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "Products");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (active >= 0 && results[active]) {
      setOpen(false);
      router.push(`/products/${results[active].slug}`);
      return;
    }
    goToResults();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
    if (!showPanel || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    }
  }

  return (
    <div ref={boxRef} className="relative w-full md:block">
      <form onSubmit={onSubmit} role="search" autoComplete="off">
        <input
          type="search"
          name="product-search"
          autoComplete="off"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search here..."
          aria-label="Search here..."
          className="w-full rounded-lg border border-line bg-muted px-2 py-1 md:py-2 outline-none"
        />
      </form>

      {showPanel && (
        <div className="fixed inset-x-3 top-16 z-50 max-h-[70vh] overflow-y-auto rounded-xl border border-line bg-surface shadow-xl md:absolute md:inset-x-0 md:top-full md:mt-2">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-gray-500">
              No products found for “{query.trim()}”
            </p>
          ) : (
            <>
              <ul>
                {results.map((p, i) => {
                  const img =
                    p.images.find((x) => x.is_default)?.src ?? p.images[0]?.src;

                  return (
                    <li key={p.id}>
                      <Link
                        href={`/products/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-muted ${
                          i === active ? "bg-muted" : ""
                        }`}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-5">
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {img && (
                              <Image
                                src={img}
                                alt=""
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">
                              {p.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {p.category}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 text-sm font-bold">
                          {fmt(p.base_price)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                onClick={goToResults}
                className="flex w-full cursor-pointer items-center justify-center gap-2 border-t border-gray-100 bg-muted-60 text-sm font-semibold text-indigo-700 hover:bg-muted py-2"
              >
                <Search size={14} />
                View all {total} results
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
