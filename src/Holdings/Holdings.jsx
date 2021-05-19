import React from "react";
import CardHolding from "./CardHolding";
//css
import "./holdings.css";

const data = [
  {
    coinName: "Dogecoin",
    amount: 50,
    total_paid: 25,
    current_value: 24,
    pl: 0.09,
  },
  {
    coinName: "Dogecoin",
    amount: 50,
    total_paid: 25,
    current_value: 24,
    pl: -10,
  },
];

const Holdings = () => {
  return (
    <div className="stat">
      <h1>Current Holdings</h1>
      <div className="card-container">
        {data.map((coin) => (
          <CardHolding data={coin} />
        ))}
      </div>
    </div>
  );
};

export default Holdings;
