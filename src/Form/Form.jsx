
import "./Form.css";
import { useState, useContext, useEffect } from "react";
//contexts
import StateContext from "../_contexts/StateContext";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("buy");
  const [disableButton, setDisableButton] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);
  const [max, setMax] = useState(0);

  const {
    currentCoin,
    showForm,
    setShowForm,
    wallet,
    setWallet,
    setHoldings,
    holdings,
    setTransactions,
    setPortfolio
  } = useContext(StateContext);

  const { name, market_data } = currentCoin;
  const currentPrice = market_data ? market_data.current_price.usd : 0;

  useEffect(() => {
    setMax((wallet / currentPrice).toFixed(6));
    setTransactionType("buy");
  }, [showForm, currentPrice, wallet, setMax, setTransactionType]);

  useEffect(() => {
    setTotalPayment((currentPrice * amount).toFixed(2));
    switch (transactionType) {
      case "buy":
        setMax((wallet / currentPrice).toFixed(6));
        if ((currentPrice * amount).toFixed(2) > wallet) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }
        break;
      case "sell":
       
        let amountLimit = holdings.find((el) => el.coinName === name).amount;
        setMax(amountLimit);

        if (amount > amountLimit) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }

        break;
      default:
    }
  }, [transactionType, amount, currentPrice, holdings, name, wallet]);

  const performTransaction = (e) => {
    e.preventDefault();
    switch (transactionType) {
      case "buy":
        setWallet(prev => prev = (wallet - totalPayment).toFixed(2) ) ;

        setHoldings((prev) => {
          const newHoldings = JSON.parse(JSON.stringify(prev));
          const target = newHoldings.find((el) => el.coinName === name);
          target.amount += Number(amount);
          target.total_paid += Number(totalPayment);
          setPortfolio( prev => (Number(prev) +   Number(totalPayment)).toFixed(2) )
          return newHoldings;
        });

        setTransactions((prev) => {
          let newTransactions = JSON.parse(JSON.stringify(prev));
          let createTransaction = {
            coinName: name,
            amount,
            total_paid: totalPayment,
            current_value: currentPrice,
            date: new Date(),
            isBuy: transactionType === "buy" ? true : false,
          };

          return [...newTransactions, createTransaction];
        });

        break;
      case "sell":
        setWallet(prev => prev  = (Number(wallet) + Number(totalPayment)).toFixed(2));

        setHoldings((prev) => {
          const newHoldings = JSON.parse(JSON.stringify(prev));
          const target = newHoldings.find((el) => el.coinName === name);
          target.amount -= Number(amount);
          target.total_paid -= Number(totalPayment);
          setPortfolio( prev => (Number(prev) -   Number(totalPayment)).toFixed(2) )
          return newHoldings;
        });

        setTransactions((prev) => {
          let newTransactions = JSON.parse(JSON.stringify(prev));
          let createTransaction = {
            coinName: name,
            amount,
            total_paid: totalPayment,
            current_value: currentPrice,
            date: new Date(),
            isBuy: transactionType === "buy" ? true : false,
          };

          return [...newTransactions, createTransaction];
        });

        break;

      default:
        break;
    }
    setAmount(0); setTotalPayment(0); setMax(0);
    setShowForm(false);
  };
  return (
    showForm &&
    <div className='wrapper'>
      <div className="Form ">
        <div className="Form-Header">
          <h1> Buy {name} </h1>
          <div className="Form-Close" onClick={() => { setAmount(0); setTotalPayment(0); setMax(0); setShowForm(false) }}> X </div>
        </div>
        <div className="Form-content">
          <h3> Current Price: {currentPrice}</h3>
          <div className="Input"> 
            <input type="number"  min="0.000001" step="0.000001" value={amount} onChange={(e) =>setAmount(e.target.value)} />
            <h4> Max: {max} </h4>
          </div>
          <div className='message'>
            <span
              className={
                transactionType === 'buy' ? totalPayment < wallet
                  ? "positive"
                  : "negative"
                  : "positive"
              }
            >
              <p>You will {transactionType === 'buy' ? 'be charged' : 'recive'} ${totalPayment}</p>
            </span>
          </div>
          <div className="Input-Radio">
            <div className="transaction">
              <input type="radio" value="buy" name="transaction" onClick={() => setTransactionType('buy')} defaultChecked /> Buy
          </div>
            <div className="sell">
              <input type="radio" value="sell" name="transaction" onClick={() => setTransactionType('sell')} /> Sell
          </div>
          </div>
          <button disabled={disableButton} className="Form-Button" onClick={performTransaction}>{transactionType}</button>
        </div>
      </div>
    </div>
  )

}

export default Form;
