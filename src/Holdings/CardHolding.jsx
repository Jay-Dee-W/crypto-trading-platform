import React, { useContext } from "react";
import StateContext from "../_contexts/StateContext";
//css
import "./card-holding.css";

let coin = null;
let current_value = 0;
let pl = 0;
let className = "";
let emoji = "";

const CardHolding = (props) => {
  const { data } = props;
  const { coinName, amount, total_paid } = data;
  const { coins } = useContext(StateContext);

  if (coins.length) {
    coin = coins.find((el) => el.name === coinName);
    current_value = coin.market_data.current_price.usd;
    pl = (amount * current_value - total_paid).toFixed(2);
   
  
   
    if (pl > 0) {
      
      className = "positive";
      emoji = "🚀";
    } else if (pl < 0) {
      // setHoldings( prev => prev - pl)
      className = "negative";
      emoji = "🔻";
    }
  }

  return (
    amount > 0 && (
      <div className="card-holding">
        <h2>
          {coinName}: {amount}
        </h2>
        <h2>
          Total Paid: ${total_paid}, Current Value: ${current_value}
        </h2>
        <h2 className={className}>
          P/L: ${pl} {emoji}
        </h2>
      </div>
    )
  );
};

export default CardHolding;