//modules
import { useContext } from "react";
//css
import "./coin.css";
//context
import CoinContext from "../_contexts/CoinContext";

const Coin = (props) => {
  const { data } = props;

  const { name, market_data, image } = data;

  const { setCurrentCoin, coins, setShowForm } = useContext(CoinContext);

  return (
    <button className="coin" onClick={toggleForm}>
      <img src={image.small} alt="" />
      <div className="information">
        <h1>${market_data.current_price.usd}</h1>
        <h2>{name}</h2>
        <p>
          Last 24h:{" "}
          <span
            className={
              market_data.price_change_percentage_24h > 0
                ? "positive"
                : "negative"
            }
          >
            {market_data.price_change_percentage_24h}%
          </span>
        </p>
      </div>
    </button>
  );

  function toggleForm() {
    let coinName = coins.find((coin) => coin.name === name);
    setCurrentCoin(coinName);
    setShowForm(true)
  }
};

export default Coin;
