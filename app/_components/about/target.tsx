import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { targetAudience } from "@/lib/constants";
export default function Target() {
  return (
    <div className="items-center justify-between flex flex-col-reverse gap-12 xl:flex-row xl:gap-0">
      {/* LEFT */}
      <div
        data-aos="fade-right"
        className="flex flex-col w-full xl:w-1/2 gap-5"
      >
        <Badge className="px-4">The Second Step</Badge>

        <h1 className="font-semibold text-4xl md:text-6xl mb-5">
          Who is the target audience?
        </h1>
        <div className="flex flex-col gap-8">
          {targetAudience.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-8">
              <div className="w-fit text-white bg-gradient-to-br from-[#4D44B7] to-[#221E51] rounded-4xl p-3 shadow-lg shadow-[#4D44B7]/50">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        data-aos="fade-left"
        data-aos-delay={250}
        className="flex flex-col w-full xl:w-1/2"
      >
        <Image
          className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] object-cover self-center xl:self-end"
          src={"/assets/images/about-image-2.png"}
          alt="About Image"
          width={1550}
          height={1550}
        />
      </div>
    </div>
  );
}
