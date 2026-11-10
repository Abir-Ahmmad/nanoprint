import React, { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import SecNav from '@/components/layout/SecNav'
import Footer from '@/components/layout/Footer'
import CartProvider from "@/context/CartContext"
import CartDrawer from '@/components/layout/CartDrawer'

export default function StoreLayout({children, }: {children: ReactNode}) {
  return (
    <CartProvider>
    <Navbar/>
    <SecNav/>
    {children}
    <Footer/>
    <CartDrawer />
    </CartProvider>
  )
}
