"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RoadmapCard from "../roadmap/roadmap-card";
import { roadmapData } from "@/lib/constants";

export default function Roadmap() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="roadmap"
      className="w-full py-28 px-5 sm:px-10 xl:px-0 xl:pl-10 2xl:pl-24 3xl:pl-60 scroll-mt-24"
    >
      <Carousel
        data-aos="fade-in"
        className="w-full flex flex-col xl:flex-row gap-25 xl:items-center"
        opts={{
          align: "start",
        }}
        setApi={setApi}
      >
        <div className="w-full xl:w-[50%] flex flex-col">
          {/* Title */}
          <div className="mb-10">
            <h1 className="font-semibold text-4xl md:text-6xl mb-5 text-gray-900">
              Roadmap
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {`Here’s a quick look at our journey—from where we started to where we’re headed next`}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-row items-center gap-4 self-end xl:self-auto">
            <CarouselPrevious size={"sm"} variant={"default"} />
            <CarouselNext size={"sm"} variant={"default"} />
          </div>
        </div>

        {/* Content */}
        <CarouselContent className="xl:flex w-full xl:w-[55%] md:mx-1 md:my-1">
          {roadmapData.map((quarter, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 md:basis-2/4 xl:basis-2/3"
            >
              <RoadmapCard current={current} roadmap={quarter} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
