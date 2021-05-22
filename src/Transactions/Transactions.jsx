import React, { useContext } from "react";
import StateContext from "../_contexts/StateContext";
//components
import CardTransaction from "./CardTransaction";

const Transactions = () => {
  const { transactions } = useContext(StateContext);
  return (
    <div className="stat">
      <h1>Transactions</h1>
      <div
        className="card-container"
        style={{ flexDirection: "column-reverse" }}
      >
        {transactions.map((transaction, i) => (
          <CardTransaction key={i} data={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;