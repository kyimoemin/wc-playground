import { mainnet } from "viem/chains";

export function isMainnetConnected(
  chainId: number | undefined,
  isConnected: boolean
) {
  if (!isConnected) return console.log("wallet is not connected");
  if (chainId !== mainnet.id)
    return console.log("connected wallet is not eth mainnet");
  return true;
}
