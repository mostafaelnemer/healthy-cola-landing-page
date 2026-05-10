"use client";

import { brands } from "@/lib/constants";
import Image from "next/image";

export default function BrandList() {
  const itemWidth = 215;
  const brandCount = brands.length;
  const singleSetWidth = brandCount * itemWidth;

  const multipleBrands = [...brands, ...brands, ...brands];

  return (
    <div data-aos="fade-in" className="w-full bg-bg relative">
      {/* Scrolling content */}
      <div className="relative overflow-hidden">
        <div
          className="flex animate-scroll-brands"
          style={{
            width: `${singleSetWidth * 2}px`,
          }}
        >
          {multipleBrands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-10 cursor-pointer"
              style={{ width: "135px" }}
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={135}
                height={135}
                className="object-contain overflow-hidden rounded-2xl w-24 h-24 lg:h-32 lg:w-32"
              />
            </div>
          ))}
        </div>

        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-24 lg:h-32 lg:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-24 lg:h-32 lg:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
