import "./App.css";
import { Playground } from "./pages/Playground";
import { WalletProvider } from "./provider/WalletProvider";

function App() {
  return (
    <WalletProvider>
      <Playground />
    </WalletProvider>
  );
}

export default App;
