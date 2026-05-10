import React from "react";
import { Card } from "@/components/ui/card";
import FeatureCard from "./feature-card";
import { features } from "@/lib/constants";

export default function Feature() {
  return (
    <section
      id="feature"
      className="scroll-mt-24 relative h-full mx-auto w-full lg:w-2/3 xl:w-full overflow-hidden max-w-[1440px] py-32 px-5 sm:px-10 2xl:px-0"
    >
      {/* Title */}
      <h1
        data-aos="fade-down"
        style={{ wordSpacing: "0.5rem" }}
        className="font-semibold text-4xl md:text-6xl mb-5 text-gray-900 text-center"
      >
        Our Features
      </h1>

      <Card
        data-aos="fade-in"
        className="mt-8 lg:mt-10 relative border-none bg-primary rounded-3xl z-10 p-8 w-full"
      >
        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </Card>
    </section>
  );
}
