import { parseEther } from "viem";
import { mainnet } from "viem/chains";
import { useAccount, useSendTransaction } from "wagmi";
import { isMainnetConnected } from "../utils/isMainnetConnected";

export function SendETH() {
  const { isConnected, chainId } = useAccount();
  const { data: hash, sendTransaction, error } = useSendTransaction();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isMainnetConnected(chainId, isConnected)) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = parseEther(formData.get("amount") as string);
    const transaction = {
      to,
      value: value,
      chainId: mainnet.id,
    };
    console.log("send USDT", transaction);
    sendTransaction(
      {
        ...transaction,
      },
      {
        onSuccess(data) {
          console.log("success", data);
        },
        onError(err) {
          console.log("error", err);
        },
      }
    );
  }

  return (
    <div>
      Send ETH, chain: {mainnet.name}
      <form onSubmit={submit}>
        <input type="text" name="address" placeholder="address" />
        <br />
        <input type="text" name="amount" placeholder="amount" />
        <br />
        <input type="submit" />
      </form>
      hash: {hash}
      {error && `error ${error.shortMessage}`}
    </div>
  );
}
