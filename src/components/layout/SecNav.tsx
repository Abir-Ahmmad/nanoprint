import React from 'react'
import Link from 'next/link'

type Navtype = {
  id: number,
  label: string,
  link: string
}

const secNavItems : Navtype[] = [
  {
    id: 1,
    label: "All Products",
    link: "/products"
  },
  {
    id: 2,
    label: "T-Shirts",
    link: "/products?category=t-shirts"
  },
  {
    id: 3,
    label: "Hoodies",
    link: "/products?category=hoodies"
  },
  {
    id: 4,
    label: "Sweatshirts",
    link: "/products?category=sweatshirts"
  },
  {
    id: 5,
    label: "Phone Cases",
    link: "/products?category=phone-cases"
  },
  {
    id: 6,
    label: "Caps",
    link: "/products?category=caps"
  },
]

export default function SecNav() {
  return (
    <section>
      <nav>
        <ul className='hidden lg:flex items-center justify-center gap-5 h-10 bg-muted'>

          {secNavItems.map((items)=> (
            <li key={items.id}>
            <Link href={items.link}>{items.label}</Link>
          </li>
          ))} 
        </ul>
      </nav>
    </section>
  )
}
