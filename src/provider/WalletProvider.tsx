import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { mainnet, optimism } from "viem/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
import { walletConnect } from "wagmi/connectors";

const queryClient = new QueryClient();

const projectId = import.meta.env;
console.log("🚀 ~ WAGMI_PROJECT_ID:", projectId);

const metadata = {
  name: "WCTest",
  description: "wallet connect test",
  url: "http://localhost:4000",
  icons: [""],
};

const wcConnector = walletConnect({
  projectId,
  metadata,
  showQrModal: true, // false if you use Web3Modal unless the WC dialog will always shows
});

const defaultConfig = defaultWagmiConfig({
  chains: [mainnet],
  projectId,
  metadata,
});

const ethConfig = createConfig({
  chains: [mainnet],
  connectors: [wcConnector],
  transports: {
    [mainnet.id]: http(),
  },
});

const optConfig = createConfig({
  chains: [optimism],
  connectors: [wcConnector],
  transports: {
    [optimism.id]: http(),
  },
});

createWeb3Modal({
  metadata,
  wagmiConfig: ethConfig,
  projectId,
  enableAnalytics: true,
  enableSwaps: false,
  enableOnramp: false,
});

export function WalletProvider({ children }: { children: any }) {
  return (
    <WagmiProvider config={ethConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
