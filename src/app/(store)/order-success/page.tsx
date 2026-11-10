"use client"

import { fmt } from "@/lib/checkout"
import type { PlacedOrder } from "@/types"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

import React, { useEffect, useState } from 'react'

export default function OrderSuccessPage() {

    const [order, setOrder] = useState<PlacedOrder | null>(null)

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem("last-order")
            if (raw) setOrder(JSON.parse(raw));
        } catch {}
    }, []);

  return (
    <div className="bg-page px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-surface p-8 text-center shadow-sm">
            <CheckCircle2 className="mx-auto text-emerald-500" size={56} />
            <h1 className="mt-4 text-2xl font-bold">Thank you! Your order is placed.</h1>

            {order ? (
                <>
                <p className="mt-2 text-gray-600">
                    Order 
                    <span className="font-semibold">#{order.orderNumber}</span> is confirmed. A receipt will be sent to{" "} 
                    <span className="font-semibold">{order.email}</span>
                </p>

                <div className="mt-6 rounded-xl bg-muted/60 p-4 text-left text-sm">
                    <p className ="font-semibold">Shipping to</p>
                    <p className ="text-gray-600">{order.name}</p>
                    <p className ="text-gray-600">{order.address}</p>
                    <p className ="mt-1 text-xs text-gray-500">{order.shippingLabel}</p>

                    <ul className="mt-4 space-y-2 border-t border-indigo-100 pt-3">
                        {order.items.map((it) => (
                            <li key={it.variantId} className="flex justify-between gap-3">
                                <span className="truncate">{it.variantId}
                                    <span className="text-gray-500">({it.variantTitle}) * {it.quantity}</span>
                                </span>
                                <span className="font-medium">{fmt(it.price * it.quantity)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-3 flex justify-between border-t border-indigo-100 pt-3 text-base font-bold">
                        <span>Total Paid</span>
                        <span className="text-indigo-600">{fmt(order.total)}</span>
                    </div>
                </div>

                </>
            ) : (
                <p className="mt-2 text-gray-600">We have received your order</p>
            )}

            <Link href={"/products"}
            className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
            Continue Shopping
            </Link>
        </div>
    </div>
  )
}
