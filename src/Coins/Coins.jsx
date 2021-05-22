//modules
import { useEffect, useContext } from "react";
//components
import Coin from "./Coin";
//css
import "./coins.css";
//contexts
import StateContext from '../_contexts/StateContext'

const url = "https://api.coingecko.com/api/v3/coins/";
const coinNames = ["bitcoin", "ethereum", "dogecoin"];

const CoinsComponent = () => {

  const { coins, setCoins } = useContext(StateContext);
  // let interval = setInterval(() => getData(), 5000);  return () => clearInterval(interval);

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

    getData();
    let interval = setInterval(() => getData(), 5000);

    return () => clearInterval(interval);
  }, [setCoins]);


  if (coins) {
    // console.log(coins)
    return (
      <div className="coins-container">
        {coins.map((coin) => 
         <Coin key={coin.id} data={coin} />
       )} 
      </div>
    );

  } else {
    <h1> loading...</h1>
  }
};

export default CoinsComponent;
