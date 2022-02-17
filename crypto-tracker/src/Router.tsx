import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface IRouterProps {
  isDark: boolean;
  toggleDark: () => void;
}

function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart isDark={isDark} />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
