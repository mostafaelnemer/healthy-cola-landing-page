import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function FirstAbout() {
  return (
    <div className="items-center justify-between flex flex-col gap-12 xl:flex-row xl:gap-0">
      {/* LEFT */}
      <div data-aos="fade-right" className="flex flex-col w-full xl:w-1/2">
        <Image
          className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] object-cover self-center xl:self-start"
          src={"/assets/images/about-image-1.png"}
          alt="About Image"
          width={1550}
          height={1550}
        />
      </div>

      {/* RIGHT */}
      <div
        data-aos="fade-left"
        data-aos-delay={250}
        className="flex flex-col w-full xl:w-1/2 gap-5"
      >
        <Badge className="px-4">
          Real Product + Real Utility + Real Community
        </Badge>

        <h1 className="font-semibold text-4xl md:text-6xl mb-4">
          What is HCOLA?
        </h1>

        <div className="text-muted-foreground text-base space-y-5">
          <p>
            {`HCOLA is a guilt-free soft drink brand blending taste with wellness. In our first year we grew to $4.7M in revenue across 15 countries, proving the demand for a healthier cola alternative.`}
          </p>

          <p>
            With the{" "}
            <strong className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              HCOLA
            </strong>{" "}
            Token, fans and investors can join our journey. Token holders enjoy
            staking rewards, purchase-to-earn benefits, discounts, and early
            access to premium products — all designed to connect real-world
            consumption with blockchain rewards.
          </p>
        </div>

        <Button size={"lg"} className="text-xs gap-4 xl:w-fit mt-3">
          <Link href="https://healthycola.com" target="_blank">
            Visit Main Website
          </Link>
          <div className="text-primary bg-white rounded-sm">
            <ArrowRight className="-rotate-45" />
          </div>
        </Button>
      </div>
    </div>
  );
}
