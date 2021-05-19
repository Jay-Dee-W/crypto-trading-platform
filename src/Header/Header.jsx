import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  // eslint-disable-next-line
  const [wallet, setWallet] = useState(100);
  // eslint-disable-next-line
  const [porfolio, setPorfolio] = useState(0);
  return (
    <div className="Header">
      <h1> Earn some virtual money</h1>
      <p>To buy virtual food</p>
      <h3> Wallet: {wallet}</h3>
      <h2> Porfolio Value: {porfolio}</h2>
    </div>
  );
};

export default Header;
