"use client";

import { useState } from "react";
import Section from "./Section";
import { Lock } from "lucide-react";

export default function PaymentForm() {
  const [method, setMethod] = useState<"card" | "installments">("card");

  const field =
    "w-full min-w-0 rounded-lg border border-line bg-surface px-3 py-3 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200";

  return (
    <Section
      n={3}
      title="Payment Method"
      right={
        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-gray-500">
          <Lock size={12} /> End-to-end encrypted
        </span>
      }
    >
      <div className=" space-y-3">
        <div
          className={`rounded-xl border-2 ${method === "card" ? "border-indigo-600" : "border-line"}`}
        >
          <label className="flex cursor-pointer items-center justify-between p-4">
            <span className="flex items-center gap-3 text-sm font-semibold">
              <input
                type="radio"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              Credit / Debit Card
            </span>
            <span className="flex gap-1 text-[10px] font-bold text-gray-500">
              <span className="rounded bg-gray-100 px-1.5 py-0.5">VISA</span>
              <span className="rounded bg-gray-100 px-1.5 py-0.5">MC</span>
              <span className="rounded bg-gray-100 px-1.5 py-0.5">AMEX</span>
            </span>
          </label>

          {method === "card" && (
            <div className="space-y-4 border-t border-indigo-100 bg-muted/40 p-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold">
                  Cardholder Name
                </label>
                <input
                  className={field}
                  autoComplete="cc-name"
                  placeholder="NAME ON CARD"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold">
                  Card Name
                </label>
                <input
                  className={field}
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">
                    Expiration Date
                  </label>
                  <input
                    className={field}
                    autoComplete="cc-exp"
                    placeholder="MM / YY"
                    maxLength={7}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">
                    Security Code (CVC)
                  </label>
                  <input
                    className={field}
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="•••"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <label className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 ${method === "installments" ? "border-indigo-600" : "border-line"}`}>
            <span className="flex items-center gap-3 text-sm font-semibold">
                <input type="radio"
                checked={method === "installments"} 
                onChange={() => setMethod("installments")}
                />
                Pay in 4 Installments
            </span>
        </label>

      </div>
    </Section>
  );
}
