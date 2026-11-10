import React from "react";
import Link from "next/link";
import { Camera, CirclePlay, MessageSquareMore, Speech } from "lucide-react";

type Navtype = {
  id: number;
  label: string;
  link: string;
};

const productDrops: Navtype[] = [
  {
    id: 1,
    label: "Shop All",
    link: "#",
  },
  {
    id: 2,
    label: "Over Sized Tees",
    link: "#",
  },
  {
    id: 3,
    label: "Heavy Weight Hoodies",
    link: "#",
  },
  {
    id: 4,
    label: "Embroidered Caps",
    link: "#",
  },
  {
    id: 5,
    label: "Tough Phone Cases",
    link: "#",
  },
  {
    id: 6,
    label: "New Drops",
    link: "#",
  },
];

const customerCare: Navtype[] = [
  {
    id: 1,
    label: "Order Tracking",
    link: "#",
  },
  {
    id: 2,
    label: "Size Guides",
    link: "#",
  },
  {
    id: 3,
    label: "Returns & Exchanges",
    link: "#",
  },
  {
    id: 4,
    label: "Shipping Rates",
    link: "#",
  },
  {
    id: 5,
    label: "FAQs",
    link: "#",
  }
];

export default function Footer() {
  return (
    <section className="bg-[#283044] text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-start lg:grid-cols-4 gap-5 py-8 border-b border-gray-600">
          <div>
            <Link
              href="/"
              className="uppercase text-[18px] md:text-2xl font-semibold"
            >
              Nano Print
            </Link>
            <p className="text-gray-400 text-[14px]">
              Engineered Print-on-Demand streetwear built on premium circular
              cotton, non-toxic reactive inks, and athletic durability.
            </p>

            <div className="mt-4 flex gap-4 items-center">
              <MessageSquareMore
                size={35}
                className="p-2 rounded-xl bg-[#3A4256]"
              />

              <Camera size={35} className="p-2 rounded-xl bg-[#3A4256]" />

              <CirclePlay size={35} className="p-2 rounded-xl bg-[#3A4256]" />

              <Speech size={35} className="p-2 rounded-xl bg-[#3A4256]" />
            </div>
          </div>

            <div className="mt-4 md:mt-0">
                <h3 className="uppercase text-[18px] md:text-2xl font-semibold">Product Drops</h3>
                <ul>
                    {productDrops.map((item)=> (
                        <li 
                        key={item.id}
                        className="text-gray-400"
                        >
                            <Link href={item.link}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="mt-4 md:mt-0">
                <h3 className="uppercase text-[18px] md:text-2xl font-semibold">Customer Care</h3>
                <ul>
                    {customerCare.map((item)=> (
                        <li 
                        key={item.id}
                        className="text-gray-400"
                        >
                            <Link href={item.link}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 md:mt-0">
                <h3 className="uppercase text-[18px] md:text-2xl font-semibold">vip access</h3>
                <p className="text-gray-400 text-[14px]">
              Get 15% off your first drop plus early access to hyper-limited catalog runs.
            </p>
            <div className="flex items-center gap-2 mt-3">
                <input 
                type="text" 
                className="border border-gray-600 bg-gray-700 rounded-lg py-1 outline-none active:border-none active:outline-none px-2 w-full sm:w-[50%] lg:w-full "
                placeholder="Enter your email"
                />
                <button className="py-1 px-3 bg-[#4F46E5] rounded-lg text-white hover:cursor-pointer">
            <Link href="#">Join</Link>
          </button>
            </div>
            <p className="text-gray-400 text-[10px] mt-2">Zero spam. Opt out any time with 1-click.</p>
            </div>


        </div>

        <div className="lg:flex items-center justify-between py-8">
            <div className="md:flex items-center gap-3">
                <p className="text-gray-400 text-[14px]">© 2026 Nano Print. All rights reserved.</p>
                <Link className="text-gray-400 text-[14px]" href="#">Privacy Policy</Link>
                <Link className="text-gray-400 ml-3 md:ml-0 text-[14px]" href="#">Terms</Link>
            </div>

            <div className="mt-4 lg:mt-0 flex flex-wrap gap-2">
                <span  className="py-1 text-xs px-2 uppercase inline-block bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">Visa</span>
                <span  className="py-1 text-xs  px-2 uppercase bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">mc</span>
                <span  className="py-1 text-xs  px-2 uppercase bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">amex</span>
                <span  className="py-1 text-xs  px-2 uppercase bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">apple pay</span>
                <span  className="py-1 text-xs  px-2 uppercase bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">paypal</span>
                <span  className="py-1 text-xs  px-2 uppercase bg-[#3A4256] text-gray-300 border border-gray-400 rounded-lg">G pay</span>
            </div>
        </div>


      </div>
    </section>
  );
}
