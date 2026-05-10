import React, { Fragment } from "react";
import Countdown from "./countdown";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AmountInput from "./amount-input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { BUY_TOKEN_URL } from "@/lib/constants";

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
  const soldAmount = data?.response
    ? Number(data.response.sold_amount.replace(/,/g, "").split(" ")[0])
    : 0;
  const totalAmount = data?.response
    ? Number(data.response.total_amount.replace(/,/g, "").split(" ")[0])
    : 0;
  const tokenPrice = data?.response ? Number(data.response.price) : 0.0001;

  const progress = Math.min(100, (soldAmount / totalAmount) * 100);

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <Card className="bg-white border-[#FFCDFF] rounded-3xl w-full md:w-[525px] h-full flex flex-col items-center gap-4 p-8">
      {/* Title */}
      <h2 className="text-4xl font-medium text-center">
        HEALTH Presale{" "}
        <span className="text-base font-normal">
          {isLive ? "Live Until" : "Starts in"}
        </span>
      </h2>

      {isLoading ? (
        <Fragment>
          <Skeleton className="h-16 w-full mx-auto rounded-xl" />

          <Skeleton className="h-8 w-52 mx-auto" />

          <Skeleton className="h-6 w-full rounded-full" />

          <div className="flex items-center w-full">
            <Skeleton className="flex-1 h-[2px] rounded-full" />
            <Skeleton className="mx-4 h-6 w-32" />
            <Skeleton className="flex-1 h-[2px] rounded-full" />
          </div>

          <div className="flex flex-row items-center gap-4 w-full justify-between">
            <div className="space-y-2 w-1/2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2 w-1/2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <Skeleton className="h-12 w-full" />
        </Fragment>
      ) : error ? (
        <div className="text-red-500">Failed to load data</div>
      ) : data ? (
        <>
          <Countdown
            targetDate={isLive ? new Date(endDate!) : new Date(startDate!)}
          />

          {/* Total Raised */}
          {/* <div style={{ wordSpacing: "0.2rem" }}>
            USD Raised: ${soldAmount.toLocaleString("en-US")} / $
            {totalAmount.toLocaleString("en-US")}
          </div> */}

          <Progress className="h-5" value={progress} />

          {/* Divider */}
          <div className="flex items-center w-full">
            <div className="flex-1 h-[2px]  bg-gradient-to-r from-primary to-secondary rounded-full opacity-70" />
            <span className="mx-4 text-lg font-semibold text-[#2E2A36] whitespace-nowrap">
              $HEALTH = $
              {tokenPrice.toLocaleString("en-US", {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
              })}
            </span>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-primary to-secondary rounded-full opacity-70" />
          </div>

          <AmountInput tokenPrice={tokenPrice} />

          <Link href={BUY_TOKEN_URL} target="_blank" className="w-full">
            <Button className="py-4 w-full text-md gap-4 flex-1 mt-5">
              <div>Buy $HEALTH</div>
              <div className="text-primary bg-white rounded-sm">
                <ArrowRight className="-rotate-45" />
              </div>
            </Button>
          </Link>
        </>
      ) : null}
    </Card>
  );
}
