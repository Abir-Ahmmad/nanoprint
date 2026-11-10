import { SHIPPING_METHODS, fmt } from "@/lib/checkout";


export default function ShippingMethod({
    value, onChange,
} : {
    value: string; onChange: (id: string) => void}) {
  return (
    <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-gray-500"> Select Dispatch Velocity</p>
        <div className="space-y-3">
            {SHIPPING_METHODS.map((m) => (
                <label 
                key={m.id}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 p-4 ${
                    value === m.id ? "border-indigo-600 bg-muted/40" : "border-line"
                }`}
                >
                    <span className="flex items-start gap-3">
                        <input 
                        type="radio"
                        name="shipping"
                        checked={value === m.id}
                        onChange={() => onChange(m.id)}
                        className="mt-1"
                         />
                        <span>
                            <span className="block text-sm font-semibold">{m.label}</span>
                            <span className="block text-xs text-gray-500">{m.desc}</span>
                        </span>
                    </span>
                    <span className={`font-bold ${m.price === 0 ? "text-amber-500" : ""}`}>
                    {m.price === 0 ? "FREE" : fmt(m.price)}
                    </span>
                </label>
            ))}
        </div>
    </div>
  )
}
