import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  return (
    <button
      onClick={() => {
        open({ view: isConnected ? "Account" : "Connect" });
      }}
    >
      {isConnected ? "See Wallet" : "Connect Wallet"}
    </button>
  );
}
