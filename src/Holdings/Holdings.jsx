import React, { useContext } from "react";
import StateContext from "../_contexts/StateContext";
import CardHolding from "./CardHolding";


const Holdings = () => {
  const { holdings } = useContext(StateContext);
  return (
    <div className="stat">
      <h1>Current Holdings</h1>
      <div className="card-container">
        {holdings.map((coin) => (
          <CardHolding key={coin.coinName} data={coin} />
        ))}
      </div>
    </div>
  );
};

export default Holdings;