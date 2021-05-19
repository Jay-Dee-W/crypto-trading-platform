//modules
import { useEffect, useContext } from "react";
//components
import Coin from "./Coin";
//css
import "./coins.css";
//contexts
import CoinContext from "../_contexts/CoinContext";

const url = "https://api.coingecko.com/api/v3/coins/";
const coinNames = ["bitcoin", "ethereum", "dogecoin"];

const CoinsComponent = () => {
  const { coins, setCoins } = useContext(CoinContext);
  useEffect(() => {
    async function getData() {
      let coinsData = [];

      for (let i = 0; i < coinNames.length; i++) {
        let data = await fetch(url + coinNames[i]);
        let response = await data.json();
        coinsData.push(response);
      }

      setCoins([...coinsData]);
    }

    let interval = setInterval(() => getData(), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coins-container">
      {coins.map((coin) => (
        <Coin data={coin} />
      ))}
    </div>
  );
};

export default CoinsComponent;
