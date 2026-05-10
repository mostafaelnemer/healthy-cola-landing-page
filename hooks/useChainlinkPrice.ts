import { useReadContract } from "wagmi";
import { CHAINLINK_PRICE_FEED_ABI } from "../lib/abi/chainlink-price-feed";
import { mainnet } from "viem/chains";
import { CHAINLINK_PRICE_FEEDS, PriceFeedKey } from "@/lib/constants";

export interface PriceData {
  price: number;
  roundId: bigint;
  updatedAt: number;
  decimals: number;
  formattedPrice: string;
}

export function useChainlinkPrice(priceFeedKey: PriceFeedKey) {
  const priceFeed = CHAINLINK_PRICE_FEEDS[priceFeedKey];

  const { data, isError, isLoading, error } = useReadContract({
    address: priceFeed.address,
    abi: CHAINLINK_PRICE_FEED_ABI,
    functionName: "latestRoundData",
    chainId: mainnet.id,
  });

  const priceData: PriceData | null = data
    ? {
        price: Number(data[1]) / Math.pow(10, priceFeed.decimals),
        roundId: data[0],
        updatedAt: Number(data[3]),
        decimals: priceFeed.decimals,
        formattedPrice: (
          Number(data[1]) / Math.pow(10, priceFeed.decimals)
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 6,
        }),
      }
    : null;

  return {
    data: priceData,
    isLoading,
    isError,
    error,
    priceFeed,
  };
}

export function useEthPrice() {
  return useChainlinkPrice("ETH/USD");
}

export function useUsdtPrice() {
  return useChainlinkPrice("USDT/USD");
}
