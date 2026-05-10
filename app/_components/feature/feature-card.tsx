import React from "react";
import { Card } from "@/components/ui/card";

export default function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  return (
    <Card
      data-aos="fade-left"
      data-aos-delay={`${250 * index}`}
      className="bg-white rounded-xl gap-1 p-6 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out"
    >
      <div className="w-fit text-white bg-gradient-to-br from-[#4D44B7] to-[#221E51] rounded-2xl p-3 shadow-lg shadow-[#4D44B7]/50">
        {feature.icon}
      </div>

      <h2 className="text-left font-semibold text-lg sm:text-xl mt-4">
        {feature.title}
      </h2>
      <div className="text-left text-xs sm:text-base text-muted-foreground">
        {feature.description}
      </div>
    </Card>
  );
}
