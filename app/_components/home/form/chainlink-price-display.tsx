"use client";

import React from "react";
import { useEthPrice, useUsdtPrice } from "@/hooks/useChainlinkPrice";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface PriceDisplayProps {
  title: string;
  price: string | null;
  isLoading: boolean;
  isError: boolean;
  lastUpdated?: number;
}

function PriceDisplay({
  title,
  price,
  isLoading,
  isError,
  lastUpdated,
}: PriceDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-6 w-24" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <span className="text-sm text-red-500">Error loading price</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-sm font-medium text-gray-600">{title}</span>
      <span className="text-lg font-bold text-gray-900">{price || "N/A"}</span>
      {lastUpdated && (
        <span className="text-xs text-gray-500">
          Updated: {new Date(lastUpdated * 1000).toLocaleTimeString()}
        </span>
      )}
    </div>
  );
}

export default function ChainlinkPriceDisplay() {
  const ethPrice = useEthPrice();
  const usdtPrice = useUsdtPrice();

  return (
    <Card className="p-4 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-center mb-4">Live Prices</h3>
      <div className="grid grid-cols-2 gap-4">
        <PriceDisplay
          title="ETH/USD"
          price={ethPrice.data?.formattedPrice || null}
          isLoading={ethPrice.isLoading}
          isError={ethPrice.isError}
          lastUpdated={ethPrice.data?.updatedAt}
        />
        <PriceDisplay
          title="USDT/USD"
          price={usdtPrice.data?.formattedPrice || null}
          isLoading={usdtPrice.isLoading}
          isError={usdtPrice.isError}
          lastUpdated={usdtPrice.data?.updatedAt}
        />
      </div>
    </Card>
  );
}
