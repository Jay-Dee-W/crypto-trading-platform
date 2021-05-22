import React from "react";
//css
import "./card-transaction.css";

const CardTransaction = (props) => {
  let { data } = props;
  let { coinName, amount, total_paid, current_value, isBuy, date } = data;
  let formatDate = new Date(date).toLocaleString();

  return (
    <div className={`card-holding ${isBuy ? "buy" : "sell"}`}>
      <h2>
        {coinName} - {amount} @{current_value}
      </h2>
      <h3>
        {isBuy ? "Paid" : "Received"}: ${total_paid}
      </h3>
      <p>
        {isBuy ? "Bought" : "Sold"} on {formatDate}
      </p>
    </div>
  );
};

export default CardTransaction;