import { Product } from "@/types"
import { ChevronDown } from "lucide-react";


function Accordion({title, defaultOpen = false, children} : {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}) {


    return (
        <details
        open= {defaultOpen}
        className="group rounded-xl bg-muted/60 px-4 py-3"
        >
            <summary
            className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {title}
                <ChevronDown size={16} className="transition-transform group-open:rotate-180" 
                />
            </summary>
            <div className="mt-3 text-sm text-ink">{children}</div>
        </details>
    )
}


export default function ProductDetails({product} : {product: Product}) {
  return (
    <div className="mt-8 space-y-3 ">
        
        {(product.full_description || product.specs?.length) && (
            <Accordion title="Product Description & Garment Specs" defaultOpen>
                {product.full_description && <p className="text-gray-500">{product.full_description}</p>}

                {product.specs && product.specs.length > 0 && (
                    <dl className="mt-4 grid grid-cols-2 gap-3" >
                        {product.specs.map((s) => (
                            <div 
                            key={s.label}
                            className="rounded-lg bg-surface p-3"
                            >
                                <dl className="text-[10px] font-bold uppercase text-gray-400">
                                    {s.label}
                                </dl>
                                <dd className="mt-0.5 text-sm font-semibold text-ink">
                                    {s.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )}
            </Accordion>
        )}

        <Accordion 
        title="Print Quality & Archival Care"
        >
            <p className="text-gray-500">Printed on demand with water-based inks. Machine wash cold, inside out, and tumble dry low to keep the print sharp.</p>
        </Accordion>

        <Accordion 
        title="Worldwide Shipping & Zero-Waste POD"
        >
            <p className="text-gray-500"> Every item is made to order, so nothing is wasted. Production takes 2–5 business days, then shipping depends on your location.</p>
        </Accordion>

    </div>
  )
}
