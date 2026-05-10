"use client";

import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../config/wagmi";
import { ReactNode } from "react";

interface WagmiProviderWrapperProps {
  children: ReactNode;
}

export function WagmiProviderWrapper({ children }: WagmiProviderWrapperProps) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
