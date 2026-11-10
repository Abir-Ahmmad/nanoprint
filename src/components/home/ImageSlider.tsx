"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LucideIcon, ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  "/imageSlider/1.jpg",
  "/imageSlider/2.jpg",
  "/imageSlider/3.jpg",
  "/imageSlider/4.jpg",
  "/imageSlider/5.jpg",
];

export default function ImageSlider() {
  const [currentImg, setCurrentImg] = useState(0);

  const goNext = () => {
    setCurrentImg((currentImg + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentImg((currentImg - 1 + images.length) % images.length);
  };

  {
    /* Auto Slide after 5secs -------------------------------------- */
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImg]);

  return (
    <section className="">
      <div className="container mx-auto px-4 ">
        <div className="relative mx-auto h-40 sm:h-60 md:h-80 lg:h-130 w-full overflow-hidden rounded-lg mt-2">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
           
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentImg ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`slide ${index + 1}`}
                  fill
                  sizes="100vh"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* <Image
            src={images[currentImg]}
            alt={`Slide ${currentImg + 1}`}
            fill
            className="object-cover"
          /> */}

          {/* Arrow Btn -------------------------------------- */}

          <button
            onClick={goPrev}
            className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 text-white cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 text-white cursor-pointer"
          >
            <ChevronRight />
          </button>

          {/* Image Slider Dot ----------------------------- */}

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => {
              const isActive = index === currentImg;

              return (
                <button
                  key={index}
                  onClick={() => setCurrentImg(index)}
                  className={
                    isActive
                      ? "h-2 w-2 rounded-full bg-surface"
                      : "h-2 w-2 rounded-full bg-gray-400"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
