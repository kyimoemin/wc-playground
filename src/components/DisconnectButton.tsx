import { useDisconnect } from "wagmi";

export function DisconnectButton() {
  const { disconnect } = useDisconnect();

  return (
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect Wallet
    </button>
  );
}
