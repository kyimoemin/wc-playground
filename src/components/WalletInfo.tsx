import { useWalletInfo } from "@web3modal/wagmi/react";

export function WalletInfo() {
  const { walletInfo } = useWalletInfo();

  return (
    <div>
      <h6>Wallet Info</h6>
      <pre>{JSON.stringify(walletInfo, null, 2)}</pre>
    </div>
  );
}
