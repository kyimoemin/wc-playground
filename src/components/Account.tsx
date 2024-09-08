import { useAccount } from "wagmi";

export function Account() {
  const { address, status, isConnected, chainId } = useAccount();

  return (
    <div>
      <h6>Account</h6>
      <pre>
        {JSON.stringify({ address, chainId, status, isConnected }, null, 2)}
      </pre>
    </div>
  );
}
