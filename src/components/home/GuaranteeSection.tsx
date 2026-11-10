import { Sparkles, TruckElectric, BadgeCheck } from "lucide-react";

export default function GuaranteSection() {
  return (
    <section className="hidden lg:flex">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between bg-muted p-4 rounded-lg gap-8">
          <div className="flex justify-center gap-4">
            <div>
              <Sparkles className="bg-[#d5d7ef] size-10 text-blue-500 p-2 rounded-lg flex items-center justify-center mt-2" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold">
                Premium Print Quality
              </h3>
              <p className="text-gray-600 text-[15px]">
                UltraHD Direct-to-Garment pigment that never cracks or fades after 100+ machine cycles.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div>
              <TruckElectric className="bg-[#d5d7ef] size-10 text-blue-500 p-2 rounded-lg flex items-center justify-center mt-2" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold">
                Fast Worldwide shipping
              </h3>
              <p className="text-gray-600 text-[15px]">
                Local production hubs in 14 countries for rapid 3-5 day
                carbon-neutral doorstep arrival.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div>
              <BadgeCheck className="bg-[#d5d7ef] size-10 text-blue-500 p-2 rounded-lg flex items-center justify-center mt-2" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold">
                East 30-Days Returns
              </h3>
              <p className="text-gray-600 text-[15px]">
                100% risk-free fit and free reprint guarantee on every
                customized apparel piece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
