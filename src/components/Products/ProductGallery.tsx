"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/types";




export default function ProductGallery({
    images, title
} : {
    images: ProductImage[];
    title: string;
}) {


    const defaultIndex = Math.max(0, images.findIndex((i) => i.is_default));
    const [active, setActive] = useState(defaultIndex);


    if (images.length === 0) {
        return <div className="aspect-4/5 rounded-2xl bg-gray-200" />
    }



  return (
    <div className="w-full max-w-95 ">
        <div className="relative mx-auto w-full max-w-140 lg:max-h[calc(100vh-10rem)] aspect-square lg:aspect-4/5 overflow-hidden rounded-2xl bg-gray-100">
            <Image 
            src={images[active].src}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            />
        </div>

        {images.length > 1 && (
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
                {images.map((img, i) => (
                    <button
                    key={img.src}
                    type="button"
                    aria-label={`view image ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`relative aspect-square w-20 lg:w-auto shrink-0  overflow-hidden rounded-lg border-2 ${
                        i === active ? "border-indigo-600" : "border-transparent"
                    }`}
                    >
                        <Image
                        src={img.src}
                        fill
                        alt=""
                        sizes="96px"
                        className="object-cover"
                        />
                    </button>
                ))}
            </div>
        )}
    </div>
  );
}
