import React from "react";
import Image from "next/image";
import { BadgeCheck, Camera, MessageSquareHeart } from "lucide-react";

export default function ReviewSection() {
  return (
    <section className=" ">
      <div className="container mx-auto px-4 ">
        <div className="bg-muted px-4 rounded-lg py-8">
          <div className="py-5 ">
          <div className=" bg-[#b9c2f7] inline-block py-1 px-2 rounded-xl">
            <div className="flex items-center gap-2 text-blue-600">
              <Camera size={15} />
              <p className="uppercase font-semibold text-[12px]">
                createor community
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Tag @NanoPrint to be Featured
            </h2>
            <p className="text-[12px] hidden md:flex text-gray-800 mt-1">
              Join the digital collective. Upload your fit pic, tag our handle,
              and get indexed in our weekly lookbook rotation.
            </p>
          </div>

          <div className="flex items-center justify-evenly gap-2 md:gap-4 mt-5">
            <div className=" flex items-center gap-2  bg-surface  py-2 px-3 rounded-xl ">
              <MessageSquareHeart className="text-blue-600" />
              <div>
                <p className="font-bold text-[12px]">50k+</p>
                <p className="text-[10px] uppercase text-gray-400">
                  custom pieces shipped
                </p>
              </div>
            </div>

            <div className=" flex items-center gap-2  bg-surface py-2 px-3 rounded-xl">
              <BadgeCheck className="text-amber-600" />
              <div>
                <p className="font-bold text-[12px]">4.9/5.0</p>
                <p className="text-[10px] uppercase text-gray-400">
                  Global Rating
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-5">
          <div className="relative h-64 w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="review1"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover "
          />
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1574502482076-933de46e26eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="review1"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover "
          />
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="review1"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover "
          />
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/flagged/photo-1572290804527-c5a402ef3164?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="review1"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover "
          />
        </div>
        </div>
        </div>


      </div>
    </section>
  );
}
