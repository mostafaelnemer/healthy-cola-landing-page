"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { teamMembers } from "@/lib/constants";
import CardTeam from "./team-card";

export default function Team() {
  return (
    <section id="team" className="bg-[#FAFAFA] scroll-mt-24">
      <div className="py-32 w-full mx-auto max-w-[1440px] flex flex-col space-y-10 px-5 sm:px-10 xl:px-0">
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-6"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            Meet Our Amazing Team
          </h1>
          <p className="text-muted-foreground text-base text-center">
            {`Strategy, design, and engineering under one roof. The team turns ideas into maginificent products`}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {teamMembers.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/1 sm:basis-1/1 md:basis-1/2 xl:basis-1/3"
              >
                <CardTeam
                  key={idx}
                  name={item.name}
                  position={item.position}
                  image={item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
