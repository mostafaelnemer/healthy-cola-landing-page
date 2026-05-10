import React, { Fragment } from "react";
import Countdown from "./countdown";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { BUY_TOKEN_URL, TOKEN_SYMBOL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TokenSaleFormProps {
  isLoading: boolean;
  data: APITokenInfoResponse | undefined;
  error: Error | null;
}

export default function TokenSaleForm({
  isLoading,
  data,
  error,
}: TokenSaleFormProps) {
  const tokenNextPrice =data?.response ? Number(data.response.next_price) : Number(process.env.NEXT_PUBLIC_TOKEN_NEXT_PRICE) || 0.000;
  const tokenListingPrice =
    Number(process.env.NEXT_PUBLIC_TOKEN_LISTING_PRICE) || 0.000;
  const holderCount = Number(process.env.NEXT_PUBLIC_HOLDER_COUNT) || 12136;
  const showHolderCount =
    process.env.NEXT_PUBLIC_SHOW_HOLDER_COUNT?.toLowerCase() === "true";
  const tokenPrice = data?.response ? Number(data.response.price) : 0.000;
  const nextPricePercentage = (
    ((tokenNextPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);
  const listingPricePercentage = (
    ((tokenListingPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);

  // const soldAmount = data?.response
  //   ? Number(data.response.sold_amount.replace(/,/g, "").split(" ")[0])
  //   : 0;
  // const totalAmount = data?.response
  //   ? Number(data.response.total_amount.replace(/,/g, "").split(" ")[0])
  //   : 0;
  // const progress = Math.min(100, (soldAmount / totalAmount) * 100);

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <div className="flex w-full h-fit items-center justify-center lg:justify-start mt-[10vh] z-40">
      <Card className="bg-white border-none shadow-none rounded-3xl w-full md:w-[525px] h-full flex flex-col items-center gap-2 md:gap-5 p-5">
        {/* Title */}
        <div className="flex flex-col w-full items-center gap-1 bg-primary p-2 rounded-xl text-white">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            BUY ${TOKEN_SYMBOL} AT $
            {tokenPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}
          </h2>
          {/*<h2 className="text-xl md:text-3xl font-bold text-center">*/}
          {/*  listing price $*/}
          {/*  {tokenListingPrice.toLocaleString("en-US", {*/}
          {/*    minimumFractionDigits: 0,*/}
          {/*    maximumFractionDigits: 4,*/}
          {/*  })}*/}
          {/*</h2>*/}
          <p className="text-lg text-center font-medium line-through">
            from $
            {tokenNextPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}
          </p>
        </div>
        {/*<div className="flex items-center text-black -mb-4">*/}
        {/*  <p className="font-bold md:text-lg text-center text-lg text-primary" style={{fontSize:'1.7rem'}}>*/}
        {/*    /!*The trading date on Lbank platform will be During January.*!/*/}
        {/*    Trading will begin soon.*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className="grid grid-cols-3 gap-2 md:gap-5 w-full h-full text-white">

          <div className="flex flex-col w-full h-28 bg-primary items-center justify-start p-2 rounded-xl relative">
            <div className="absolute h-28 -mt-2 p-2 rounded-xl w-full bg-primary blur-[15px] z-10" />
            <p className="text-sm md:text-base font-normal text-center z-20 whitespace-nowrap">
              Current Price
            </p>
            <p className="text-2xl md:text-3xl font-medium mt-2 z-20">
              $
              {tokenPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
          </div>

          <div className="flex flex-col w-full h-28 border-4 border-primary items-center justify-between p-2 rounded-xl text-black bg-transparent">
            <p className="text-sm md:text-base font-normal text-center whitespace-nowrap">
              Next Price
            </p>
            <p className="text-2xl md:text-3xl font-medium">
              $
              {tokenNextPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
            <p className="text-[10px] md:text-xs font-normal text-center">
              (+{nextPricePercentage}%) increase
            </p>
          </div>

          <div className="flex flex-col w-full h-28 bg-transparent border-4 border-primary items-center justify-between p-2 rounded-xl text-black">
            <p className="text-sm md:text-base font-normal text-center whitespace-nowrap">
              Listing Price
            </p>
            <p className="text-2xl md:text-3xl font-medium">
              $
              {tokenListingPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
            </p>
            <p className="text-[10px] md:text-xs font-normal text-center">
              (+{listingPricePercentage}%) increase
            </p>
          </div>
        </div>

        <div className="flex items-center text-black -mb-4">
          <p className="text-sm md:text-lg font-medium">
            {isLive ? "⚡️ The price increases in" : "Starts in"}
          </p>
        </div>

        {isLoading ? (
          <Fragment>
            <Skeleton className="h-16 w-full mx-auto rounded-xl" />

            <div className="flex flex-row items-center gap-4 w-full justify-center">
              <Skeleton className="h-12 w-64" />
              <Skeleton className="h-16 w-40" />
            </div>

            <div className="flex w-full justify-center">
              <div className="flex gap-4 items-center">
                <Skeleton className="h-16 w-28 rounded-md" />
                <Skeleton className="h-16 w-28 rounded-md" />
                <Skeleton className="h-16 w-28 rounded-md" />
              </div>
            </div>
          </Fragment>
        ) : error ? (
          <div className="text-red-400">Failed to load data</div>
        ) : data ? (
          <div className="flex flex-col space-y-3">
            <Countdown
              targetDate={isLive ? new Date(endDate!) : new Date(startDate!)}
            />

            <div className="flex flex-row items-center gap-4 w-full justify-center">
              <p
                className={cn(
                  "text-lg md:text-2xl font-bold text-black whitespace-nowrap",
                  !showHolderCount && "hidden"
                )}
              >
                {holderCount.toLocaleString("en-US")}{" "}
                <span className="text-primary">HOLDERS</span>
              </p>

              <Link
                href={BUY_TOKEN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 p-6 text-lg md:text-2xl text-white cursor-pointer">
                  Buy NOW
                </Button>
              </Link>
            </div>

            <div className="flex w-full justify-center">
              <div className="flex gap-4 items-center">
                <div className="flex flex-row items-center gap-1 border border-gray-300 p-2 rounded-md">
                  <Image
                    src="/assets/logos/tokens/eth.png"
                    alt="ETH"
                    width={30}
                    height={30}
                  />
                  <p className="text-base text-black font-medium">ETH</p>
                </div>
                <div className="flex flex-row items-center gap-1 border border-gray-300 p-2 rounded-md">
                  <Image
                    src="/assets/logos/tokens/usdt.png"
                    alt="USDT"
                    width={30}
                    height={30}
                  />
                  <p className="text-base text-black font-medium">USDT</p>
                </div>
                <div className="flex flex-row items-center gap-1 border border-gray-300 p-2 rounded-md">
                  <Image
                    src="/assets/logos/tokens/card.png"
                    alt="Card"
                    width={30}
                    height={30}
                  />
                  <p className="text-base text-black font-medium">CARD</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
