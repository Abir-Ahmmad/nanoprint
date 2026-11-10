"use client";

import useUpdateParams from "@/hooks/useUpdateParams";
import { Check } from "lucide-react";


type Props = { colors: {title: string; hex:string} []}


function isLight(hex: string) {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);

    return( r * 299 + g * 587 + b * 114) / 1000 > 180;
}



export default function ColorFilter({colors}: Props) {

    const {toggle, searchParams} = useUpdateParams();
    const selected = searchParams?.get("color")?.split(",").filter(Boolean) ?? [];

  return (
    <>
        <div className="mb-3 flex items-center justify-between">
            
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-600">Colorway</h3>
            {selected.length > 0 && (
                <span className="text-sm text-gray-500">{selected.length} Selected</span>
            )}
        </div>
        <div className="flex flex-wrap gap-3">
            {colors.map((c) => {
                const active = selected.includes(c.title);
                return(
                    <button
                    key={c.title}
                    type="button"
                    title={c.title}
                    aria-label={c.title}
                    aria-pressed={active}
                    onClick={() => toggle("color", c.title)}
                    style={{backgroundColor: c.hex}}
                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border dark:ring-1 dark:ring-gray-700 border-black/10 transition ${active 
                        ? "ring-2 ring-indigo-700 ring-offset-2" 
                        : "hover:scale-105"}`}
                    >
                        {active && (
                            <Check
                            size={16}
                            strokeWidth={3}
                            className={isLight(c.hex) ? "text-ink" : "text-white"}
                            />
                        )}
                    </button>
                )
            })}
        </div>
        
    </>
  )
}
