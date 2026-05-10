import Image from "next/image";
import React from "react";
import BrandList from "./brand-list";

export default function Availability() {
  return (
    <section
      id="availability"
      className="h-full w-full mx-auto max-w-[1440px] px-5 sm:px-10 2xl:px-0 py-28 flex flex-col gap-24 scroll-mt-24"
    >
      <div className="items-center justify-between flex flex-col gap-12 xl:flex-row">
        {/* LEFT */}
        <div data-aos="fade-right" className="flex flex-col w-full xl:w-1/2">
          <Image
            className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] object-cover self-center xl:self-start"
            src={"/assets/images/availability-image.png"}
            alt="Availability Image"
            width={917}
            height={1020}
          />
        </div>

        {/* RIGHT */}
        <div
          data-aos="fade-left"
          data-aos-delay={250}
          className="flex flex-col w-full xl:w-1/2 gap-5"
        >
          <h1 className="font-semibold text-4xl md:text-6xl mb-10 xl:mb-5 mt-5 xl:mt-0 text-center lg:text-start">
            Where is HCOLA available now?
          </h1>
          <ul className="list-disc pl-5 text-lg space-y-2 text-gray-900 font-medium">
            <li>
              Arabian Peninsula & Gulf:{" "}
              <span className="font-light">
                Saudi Arabia, UAE, Qatar, Kuwait, Oman, Yemen
              </span>
            </li>
            <li>
              Levant (Western Asia):{" "}
              <span className="font-light">Jordan, Palestine, Syria</span>
            </li>
            <li>
              North Africa: <span className="font-light">Egypt, Libya</span>
            </li>
            <li>
              Central Africa: <span className="font-light">Chad</span>
            </li>
            <li>
              North America: <span className="font-light">USA, Canada</span>
            </li>
            <li>
              Central Asia: <span className="font-light">Uzbekistan</span>
            </li>
            <li>
              Eurasia: <span className="font-light">Russia</span>
            </li>
          </ul>
        </div>
      </div>

      <BrandList />
    </section>
  );
}
