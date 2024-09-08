import { ConnectButton } from "../components/ConnectButton";
import { Connectors } from "../components/Connectors";
import { DisconnectButton } from "../components/DisconnectButton";
import { SendETH } from "../components/SendETH";
import { SendUSDT } from "../components/SendUSDT";

export function Playground() {
  return (
    <div>
      <ConnectButton />
      {/* <Connectors /> */}
      <DisconnectButton />
      <br />
      <br />
      <br />
      {/* <SendETH /> */}
      <SendUSDT />
    </div>
  );
}
