import { createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http } from "viem";

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});
