"use client";

import Image from "next/image";

export default function FeaturedCategories() {
  return (
    <section className="my-5">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="uppercase text-[12px] text-blue-600 font-semibold">
            curated categories
          </h2>
          <div className=" md:flex justify-between items-center w-full mt-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Explore the Essentials
            </h3>
            <p className=" md:w-[40%] hidden md:flex text-gray-500 text-[14px] font-medium">
              Engineered for daily rotation, constructed from structured organic
              textiles, printed sustainably on demand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-5">
            <div className="relative h-40 md:h-85 overflow-hidden group rounded-lg">
              <Image
                src="/img/minimalist_streetwear.png"
                alt="Hoodie"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-amber-500 py-1 px-2 rounded-2xl">
                  Best Seller
                </span>
              </div>

              <div className="absolute bottom-0 p-4 text-white">
                <span className="text-[10px] md:text-[12px]  text-blue-300">
                  HEAVYWEIGHT FLEECE
                </span>
                <h3 className="text-[20px] md:text-2xl font-semibold">
                  Hoodies & Pullovers
                </h3>
                <p className="text-gray-300 hidden md:flex md:text-[14px]">
                  450GSM French Terry engineered with dropped shoulders and
                  relaxed cuffs.
                </p>
              </div>
            </div>

            <div className="relative md:hidden h-40 overflow-hidden group rounded-lg">
              <Image
                src="/img/wide_cinematic_studio_banner.png"
                alt="Hoodie"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-green-500 py-1 px-2 rounded-2xl">
                  New
                </span>
              </div>

              <div className="absolute bottom-0 p-4 text-white">
                <span className="text-[12px] text-blue-300"></span>
                <h3 className="text-[20px] md:text-2xl font-semibold">
                  Oversized T-Shirts
                </h3>
                <p className="text-gray-300 hidden md:flex text-[14px]">
                  240GSM vintage wash boxy fit streetwear silhouettes.
                </p>
              </div>
            </div>

            <div className="relative md:hidden h-40 overflow-hidden group rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1791821926765-cf91d7b367c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Hoodie"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-amber-500 py-1 px-2 rounded-2xl">
                  Best Seller
                </span>
              </div>

              <div className="absolute bottom-0 p-4 text-white">
                <span className="text-[10px] md:text-[12px] text-gray-300">
                  MINIMAL
                </span>
                <h3 className="text-[20px] md:text-2xl font-semibold">
                  Sweatshirts
                </h3>
              </div>
            </div>

            <div className="relative md:hidden h-40 overflow-hidden group rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1769596722470-bf56e96b9aff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Hoodie"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-orange-500 py-1 px-2 rounded-2xl">
                  Top Selling
                </span>
              </div>

              <div className="absolute bottom-0 p-4 text-white">
                <span className="text-[10px] md:text-[12px] text-gray-300">
                  ARMOR TECH
                </span>
                <h3 className="text-[20px] md:text-2xl font-semibold">
                  Phone Cases
                </h3>
              </div>
            </div>

            <div className="rightside hidden md:grid gap-2 md:gap-4">
              <div className="relative h-40 overflow-hidden group rounded-lg">
                <Image
                  src="/img/wide_cinematic_studio_banner.png"
                  alt="Hoodie"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                  <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-green-500 py-1 px-2 rounded-2xl">
                    New
                  </span>
                </div>

                <div className="absolute bottom-0 p-4 text-white">
                  <span className="text-[12px] text-blue-300"></span>
                  <h3 className="text-[20px] md:text-2xl font-semibold">
                    Oversized T-Shirts
                  </h3>
                  <p className="text-gray-300 hidden md:flex text-[14px]">
                    240GSM vintage wash boxy fit streetwear silhouettes.
                  </p>
                </div>
              </div>

              <div className=" grid sm:grid-cols-2 gap-2 md:gap-4">
                <div className="relative h-40 overflow-hidden group rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1791821926765-cf91d7b367c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="Hoodie"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                    <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-amber-500 py-1 px-2 rounded-2xl">
                      Best Seller
                    </span>
                  </div>

                  <div className="absolute bottom-0 p-4 text-white">
                    <span className="text-[10px] md:text-[12px] text-gray-300">
                      MINIMAL
                    </span>
                    <h3 className="text-[20px] md:text-2xl font-semibold">
                      Sweatshirts
                    </h3>
                  </div>
                </div>

                <div className="relative h-40 overflow-hidden group rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1769596722470-bf56e96b9aff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="Hoodie"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent">
                    <span className="absolute top-3 left-3 uppercase text-[8px] font-semibold bg-orange-500 py-1 px-2 rounded-2xl">
                      Top Selling
                    </span>
                  </div>

                  <div className="absolute bottom-0 p-4 text-white">
                    <span className="text-[10px] md:text-[12px] text-gray-300">
                      ARMOR TECH
                    </span>
                    <h3 className="text-[20px] md:text-2xl font-semibold">
                      Phone Cases
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
