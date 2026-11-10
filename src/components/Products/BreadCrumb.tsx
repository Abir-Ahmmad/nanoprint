import { ChevronRight } from "lucide-react";
import Link from "next/link";



type Crumb = {label:string; href?: string;}

export default function BreadCrumb({items}: {items: Crumb[]}) {
  return (
    <section>
        <div className="container mx-auto px-4 mt-4">
            <nav className="text-[12px] text-gray-500">
                <ol className="flex flex-wrap items-center gap-1.5">
                    {items.map((item, i) => {
                        const isLast = i === items.length -1;
                        return(
                            <li key={item.label} className="flex items-center gap-1.5">
                                {item.href && !isLast ? (
                                    <Link href={item.href} className="hover:text-ink">
                                    {item.label}
                                    </Link>
                                ):(
                                    <span className="font-medium text-ink">{item.label}</span>
                                )}
                                {!isLast && <ChevronRight size={14}/>}
                            </li>
                        )
                    })

                    }
                </ol>
            </nav>
        </div>
    </section>
  )
}
