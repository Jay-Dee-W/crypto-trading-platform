import React from "react";
//components
import CardTransaction from "./CardTransaction";

const data = [
  {
    coinName: "Dogecoin",
    amount: 50,
    total_paid: 25,
    current_value: 24,
    pl: 0.09,
    isBuy: true,
  },
  {
    coinName: "Dogecoin",
    amount: 50,
    total_paid: 25,
    current_value: 24,
    pl: 0.09,
    isBuy: false,
  },
];

const Transactions = () => {
  return (
    <div className="stat">
      <h1>Transactions</h1>
      <div className="card-container">
        {data.map((transaction) => (
          <CardTransaction data={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
