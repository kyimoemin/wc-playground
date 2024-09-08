import { parseUnits } from "viem";
import { mainnet } from "viem/chains";
import { useAccount, useWriteContract } from "wagmi";
import { CONTRACT_CONFIG } from "../config/USDT_ERC20";
import { isMainnetConnected } from "../utils/isMainnetConnected";

export function SendUSDT() {
  const { isConnected, chainId } = useAccount();
  const { writeContract, data: hash, error } = useWriteContract();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isMainnetConnected(chainId, isConnected)) return;
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("amount") as string;
    const transaction = {
      abi: CONTRACT_CONFIG.USDT_ERC20.abi,
      functionName: "transfer",
      address: CONTRACT_CONFIG.USDT_ERC20.contractAddress,
      args: [to, parseUnits(value, CONTRACT_CONFIG.USDT_ERC20.decimal)],
    } as const;
    console.log("send USDT", transaction);
    writeContract(
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
      Send USDT(ERC20), chain: {mainnet.name}
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
