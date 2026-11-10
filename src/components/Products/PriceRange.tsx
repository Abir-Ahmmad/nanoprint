"use client"

import useUpdateParams from "@/hooks/useUpdateParams";
import { useEffect, useState } from "react";

type Props = { bounds: {min: number; max: number}};




export default function PriceRange({bounds}: Props) {

    const {updateMany, searchParams} = useUpdateParams();

    const urlMin = Number(searchParams?.get("min") ?? bounds.min);
    const urlMax = Number(searchParams?.get("max") ?? bounds.max);

    const [lo, setLo] = useState(urlMin);
    const [hi, setHi] = useState(urlMax);

    useEffect(() => {
        setLo(urlMin);
        setHi(urlMax);
    }, [urlMin, urlMax]);

    const span = bounds.max - bounds.min || 1;
    const left = ((lo - bounds.min) / span) * 100;
    const right = ((hi - bounds.min) / span) * 100;

    const clamp = (n: number) => 
        Math.min(bounds.max, Math.max(bounds.min, Number.isNaN(n) ? bounds.min: n));

    function commit(nextLo = lo, nextHi = hi) {
        updateMany({
            min: nextLo <= bounds.min ? null : String(nextLo),
            max: nextHi >= bounds.max ? null : String(nextHi),
        });
    }

  return (
    <div>
        <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-600">Price Range</h3>
            <span className="text-sm font-bold text-indigo-700">${lo} - ${hi}</span>
        </div>

        {/* Range Slider ------------------------------------------- */}
        <div className="relative mx-1 h-5">
            <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-indigo-100"/>
            <div className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-indigo-600"
            style={{left: `${left}%`, width: `${right - left}%`}}
            />
            <input type="range"
            className="dual-range"
            aria-label="Minimum price"
            min={bounds.min}
            max={bounds.max}
            value={lo}
            style={{zIndex: lo > bounds.max - span * 0.1 ? 5:3}}
            onChange={(e) => setLo(Math.min(Number(e.target.value), hi))}
            onPointerUp={() => commit()}
            onKeyUp={() => commit()}
            />
            <input type="range"
            className="dual-range"
            aria-label="Maximum price"
            min={bounds.min}
            max={bounds.max}
            value={hi}
            style={{zIndex: 4}}
            onChange={(e) => setHi(Math.max(Number(e.target.value), lo))}
            onPointerUp={() => commit()}
            onKeyUp={() => commit()}
            />
            
        </div>

        {/* min & max range input box ----------------------------------------------------------- */}

        <div className="mt-4 flex items-center gap-2">
            
            <label className="flex flex-1 items-center justify-between rounded-lg bg-white px-3 py-2.5 focus-within:border-indigo-600 dark:border-slate-600 dark:bg-slate-800">
                <span className="text-[11px] font-bold uppercase text-gray-500">Min</span>
                <span className="flex items-center font-bold text-gray-700 dark:text-gray-400">$
                    <input 
                    key={lo}
                    inputMode="numeric"
                    defaultValue={lo}
                    
                    onBlur={(e) => {
                        const v = Math.min(clamp(Number(e.target.value)), hi);
                        setLo(v);
                        commit(v, hi);
                    }}
                    
                    onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                    className="w-10 bg-muted text-right outline-none text-gray-900"
                    />
                    
                </span>
            </label>

            <span className="text-gray-500 dark:text-gray-400">-</span>

            <label className="flex flex-1 items-center justify-between rounded-lg bg-white px-3 py-2.5 focus-within:border-indigo-600 dark:border-slate-600 dark:bg-slate-800">
                <span className="text-[11px] font-bold uppercase text-gray-500 dark:text-gray-400">Max</span>
                <span className="flex items-center font-bold text-gray-700 dark:text-gray-200">$
                    <input 
                    key={hi}
                    inputMode="numeric"
                    defaultValue={hi}
                    onBlur={(e) => {
                        const v = Math.max(clamp(Number(e.target.value)), lo);
                        setHi(v);
                        commit(lo, v);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                    className="w-10 bg-transparent text-right text-gray-900 outline-none dark:text-gray-100"
                    />
                </span>
            </label>

        </div>
    </div>
  )
}
