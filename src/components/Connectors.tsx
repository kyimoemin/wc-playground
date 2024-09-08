import { useConnect } from "wagmi";

export function Connectors() {
  const { connect, connectors } = useConnect();

  return connectors.map((connector) => (
    <button key={connector.id} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}
