import React from "react";
import { useContext } from "react";
import "./Header.css";

//context
import StateContext from "../_contexts/StateContext";

const Header = () => {
  const { wallet, portfolio } = useContext(StateContext);


 
  return (
    <div className="Header">
      <h1> Earn some virtual money</h1>
      <p>To buy virtual food</p>
      <h3> Wallet: {wallet}</h3>
      <h2> Portfolio Value: { portfolio }</h2>
    </div>
  );
};

export default Header;
