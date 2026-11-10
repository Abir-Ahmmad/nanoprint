import { Check } from "lucide-react";

const STEPS = ["Bag & Drops", "Shipping & Contact", "Payment & Review"];

export default function CheckoutSteps({ current = 2 }: { current?: number }) {
  return (
    <ol className="flex items-center gap-6">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;

        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                done
                  ? "bg-amber-400 text-white"
                  : active
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-gray-500"
              }`}
            >
              {done ? <Check size={14} /> : n}
            </span>
            <span
              className={`hidden sm:inline ${active ? "text-indigo-700" : "text-gray-500"}`}
            >
              {label}
            </span>
            {n < STEPS.length && (
              <span className="h-px w-6 bg-gray-300 sm:w-10" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
