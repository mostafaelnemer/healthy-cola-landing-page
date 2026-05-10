"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEthPrice, useUsdtPrice } from "@/hooks/useChainlinkPrice";

interface AmountInputProps {
  tokenPrice?: number;
}

export default function AmountInput({ tokenPrice = 0.0001 }: AmountInputProps) {
  const [selected, setSelected] = useState("eth");
  const [inputAmount, setInputAmount] = useState<string>("0");
  const [formattedTokenAmount, setFormattedTokenAmount] = useState<string>("0");

  const ethPrice = useEthPrice();
  const usdtPrice = useUsdtPrice();

  const onValueChange = (value: string) => {
    setSelected(value);
  };

  const { exchangeRate, usdValue, isLoading } = useMemo(() => {
    const amount = parseFloat(inputAmount) || 0;

    if (selected === "eth" && ethPrice.data) {
      const usdValue = amount * ethPrice.data.price;
      return {
        exchangeRate: ethPrice.data.price,
        usdValue,
        isLoading: ethPrice.isLoading,
      };
    } else if (selected === "usdt" && usdtPrice.data) {
      const usdValue = amount * usdtPrice.data.price;
      return {
        exchangeRate: usdtPrice.data.price,
        usdValue,
        isLoading: usdtPrice.isLoading,
      };
    } else if (selected === "card") {
      return {
        exchangeRate: 1,
        usdValue: amount,
        isLoading: false,
      };
    }

    return {
      exchangeRate: 0,
      usdValue: 0,
      isLoading: true,
    };
  }, [
    inputAmount,
    selected,
    ethPrice.data,
    usdtPrice.data,
    ethPrice.isLoading,
    usdtPrice.isLoading,
  ]);

  useEffect(() => {
    if (usdValue && tokenPrice) {
      const calculatedTokens = usdValue / tokenPrice;
      setFormattedTokenAmount(
        calculatedTokens.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 6,
        })
      );
    } else {
      setFormattedTokenAmount("0");
    }
  }, [usdValue, tokenPrice]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputAmount(value);
  };

  let currencyLabel = "USD";
  if (selected === "eth") {
    currencyLabel = "ETH";
  } else if (selected === "usdt") {
    currencyLabel = "USDT";
  }

  return (
    <div className="w-full">
      <Tabs value={selected} onValueChange={onValueChange}>
        <TabsList className="overflow-x-auto">
          <TabsTrigger value="eth">
            <Image
              src="/assets/logos/tokens/eth.png"
              alt="ETH"
              width={24}
              height={24}
            />
            <div className="hidden sm:flex">ETH</div>
          </TabsTrigger>
          <TabsTrigger value="usdt">
            <Image
              src="/assets/logos/tokens/usdt.png"
              alt="USDT"
              width={24}
              height={24}
            />

            <div className="hidden sm:flex">USDT</div>
          </TabsTrigger>
          <TabsTrigger value="card">
            <Image
              src="/assets/logos/tokens/card.png"
              alt="Card"
              width={24}
              height={24}
              className={`${selected === "card" && "invert"}`}
            />
            <div className="hidden sm:flex">Card</div>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-row items-center gap-4 mt-4 w-full justify-between">
        <div className="space-y-2 w-1/2">
          <h4 className="text-xs sm:text-sm">
            <label className="font-bold" htmlFor={selected}>
              {currencyLabel}
            </label>{" "}
            you pay
          </h4>
          <Input
            alt={selected}
            id={selected}
            value={inputAmount}
            onChange={handleInputChange}
            type="number"
            className="font-semibold"
            placeholder="0"
          />
        </div>

        <div className="space-y-2 w-1/2">
          <h4 className="text-xs sm:text-sm">
            <strong>$HEALTH</strong> you receive
          </h4>
          <Input
            alt="cola"
            value={formattedTokenAmount}
            type="text"
            readOnly
            className="font-semibold"
          />
        </div>
      </div>

      {/* Exchange Rate Display */}
      <div className="mt-3 text-center">
        {isLoading ? (
          <div className="text-xs text-gray-500">Loading exchange rate...</div>
        ) : exchangeRate > 0 ? (
          <div className="text-xs text-gray-600">
            {selected === "eth" && (
              <>
                1 ETH = $
                {exchangeRate.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                USD
              </>
            )}
            {selected === "usdt" && (
              <>
                1 USDT = $
                {exchangeRate.toLocaleString("en-US", {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}{" "}
                USD
              </>
            )}
            {selected === "card" && (
              <>
                1 USD ={" "}
                {(1 / tokenPrice).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 6,
                })}{" "}
                $HEALTH
              </>
            )}
          </div>
        ) : (
          <div className="text-xs text-red-500">
            Unable to load exchange rate
          </div>
        )}
      </div>
    </div>
  );
}
