"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import TokenSaleForm from "@/app/_components/token-sale/token-sale";

export default function Home() {
  const { data, isLoading, error } = useQuery<APITokenInfoResponse, Error>({
    queryKey: ["tokenInfo"],
    queryFn: async () => {
      const response = await fetch("/api/token");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<APITokenInfoResponse>;
    },
  });

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <section className="relative w-full bg-gradient-to-br from-[#4D44B7] to-[#221E51] rounded-br-[150px] overflow-hidden pb-32">
      {/* BACKGROUND IMAGE */}
      <Image
        alt="home image"
        width={1000}
        height={1000}
        src="/assets/images/home-image.png"
        className="absolute bottom-0 left-0 h-auto z-0"
        data-aos="fade-in"
      />

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto w-full text-white pt-40 flex flex-col lg:flex-row justify-between z-10 px-5 gap-10 lg:gap-0">
        {/* LEFT */}
        <div data-aos="fade-right" className="text-center lg:text-left w-full">
          <h1
            className="text-5xl lg:text-7xl font-medium w-full lg:w-[95%] xl:w-[70%] leading-20 lg:leading-28"
            style={{
              wordSpacing: "0.5rem",
            }}
          >
            HCOLA Token Sale is{" "}
            <span className="bg-white text-primary rounded-2xl px-4 py-1">
              {isLive ? "Live Now!" : "Coming Soon!"}
            </span>
          </h1>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="flex items-center justify-center">
          <TokenSaleForm isLoading={isLoading} data={data} error={error} />
        </div>
      </div>
    </section>
  );
}
