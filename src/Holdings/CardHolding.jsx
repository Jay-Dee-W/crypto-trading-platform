import React from "react";
//css
import "./card-holding.css";

const CardHolding = (props) => {
  const { data } = props;
  const { coinName, amount, total_paid, current_value, pl } = data;
  return (
    <div className="card-holding">
      <h2>
        {coinName}: {amount}
      </h2>
      <h2>
        Total Paid: ${total_paid}, Current Value: ${current_value}
      </h2>
      <h2 className={pl > 0 ? "positive" : "negative"}>P/L: ${pl}</h2>
    </div>
  );
};

export default CardHolding;
