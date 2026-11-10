"use client";

import Link from "next/link";
import {
  LucideIcon,
  Grid2x2,
  Shirt,
  Crown,
  Boxes,
  TabletSmartphone,
  GraduationCap,
  ChevronRight,
  Truck,
  Ruler,
  HandHelping
} from "lucide-react";
import { useEffect } from "react";

type Navtype = {
  id: number;
  label: string;
  link: string;
  icon: LucideIcon;
};

const mobileMenuItems: Navtype[] = [
  {
    id: 1,
    label: "All Products",
    link: "/products",
    icon: Grid2x2,
  },
  {
    id: 2,
    label: "T-Shirts",
    link: "/products?category=t-shirts",
    icon: Shirt,
  },
  {
    id: 3,
    label: "Hoodies",
    link: "/products?category=hoodies",
    icon: Crown,
  },
  {
    id: 4,
    label: "Sweatshirts",
    link: "/products?category=sweatshirts",
    icon: Boxes,
  },
  {
    id: 5,
    label: "Phone Cases",
    link: "/products?category=phone-cases",
    icon: TabletSmartphone,
  },
  {
    id: 6,
    label: "Caps",
    link: "/products?category=caps",
    icon: GraduationCap,
  },
];


type assisType = {
  id: number;
  icon: LucideIcon;
  label: string;
  link:string;
}

const assisMenu: assisType[] = [
  {
    id:1,
    label: "Track Order",
    icon: Truck,
    link: "#"
  },
  {
    id:2,
    label: "Size Guide",
    icon: Ruler,
    link: "#"
  },
  {
    id:3,
    label: "Help & FAQs",
    icon: HandHelping,
    link: "#"
  },
]

type Props = {open: boolean; onClose: () => void}

export default function MobileMenu( {open, onClose} : Props) {

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""

    return () => {
      document.body.style.overflow = "";
    };
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if(e.key === "Escape") onClose()
    }
    if (open) window.addEventListener("keydown" , onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <>

    <div onClick={onClose}
    className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-black/40 transition-opacity duration-300 ${
      open ? "opacity-100" : "pointer-events-none opacity-0"
    }`}
    />
    
    <section 
    role="dialog"
    aria-modal="true"
    aria-label="Mobile menu"
    className={`fixed inset-x-0 top-[50px] bottom-0 z-40 overflow-y-auto  bg-surface transition-transform duration-300 ease-out ${ open ? "translate-y-0" : "-translate-y-[calc(100%+50px)]"}`}
    >
      <div className="w-full pb-10">
       

        {/* Profile area ------------------------------------------ */}

        <div className="h-20 mt-3 flex items-center justify-between bg-[#4F46E5] rounded-lg text-white p-4 mx-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-300 "></div>

            <div>
              <h3 className="text-[18px] font-medium">Profile Name</h3>
              <p className="text-[13px]">Unlock 15% VIP discount</p>
            </div>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Menu area ---------------------------------------------- */}

        <div className="bg-surface px-2 border-b border-line py-4">
          <span className="uppercase font-semibold">collections</span>
          <ul className="flex flex-col gap-2 mt-2 ">
            {mobileMenuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li className=" " key={item.id}>
                  <Link href={item.link} onClick={onClose}> 
                    <div>
                      <div className="flex items-center justify-between bg-muted py-2 rounded-lg px-2">
                        <div className="flex items-center gap-2">
                          <div>
                            <Icon size={18} />
                          </div>
                          <div>
                            <span>{item.label}</span>
                          </div>
                        </div>
                        <div>
                          <ChevronRight size={15} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Assistance area ------------------------------------ */}

        <div className="bg-surface mt-5 px-2">
          <span className="uppercase font-semibold">Assistance</span>
          <ul className="flex flex-col text-gray-600 gap-2 mt-2 ">
            {assisMenu.map((item) => {
              const Icon = item.icon;

              return (
                <li className=" " key={item.id}>
                  <Link href={item.link}>
                    <div>
                      <div className="flex items-center px-2">
                        <div className="flex items-center gap-2">
                          <div>
                            <Icon size={18} />
                          </div>
                          <div>
                            <span>{item.label}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>


      </div>
    </section>
    </>
  );
}
