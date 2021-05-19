import "./Form.css";
import { useState, useContext } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("buy")
  const [disableButton, setDisableButton] = useState(false)
  const [totalPayment, setTotalPayment] = useState(0)

  const { currentCoin, showForm, setShowForm, wallet, setWallet } = useContext(CoinContext);
  const { name, market_data } = currentCoin;
  const currentPrice = market_data ? market_data.current_price.usd : 0
  const Max = market_data ? wallet / market_data.current_price.usd : 0

  const checkAmount = (e) => {


    switch (transactionType) {
      case 'buy':
        setTotalPayment(currentPrice * (e.target.value))
        console.log('totalPayment:', totalPayment)
        if (totalPayment > wallet) {
          setDisableButton(true)
        } else {
          setDisableButton(false)

        }
        break;
      case 'sell':

        break;

      default:
        break;
    }
    setAmount(e.target.value)

  }

  const performTransaction = () => {

    switch (transactionType) {
      case 'buy':
        let totalPayment = currentPrice * amount
        setWallet(wallet - totalPayment)
        break;
      case 'sell':

        break;

      default:
        break;
    }

  }
  return (
    showForm &&
    <div className="Form ">
      <div className="Form-Header">
        <h1> Buy {name} </h1>
        <div className="Form-Close" onClick={() => setShowForm(false)}> X </div>
      </div>
      <div className="Form-content">
        <p> Current Price: {currentPrice}</p>
        <div className="Input">
          <input type="number" value={amount} onChange={checkAmount} />
          <p> Max: {Max} </p>
          <div className='message'>
            <p>You will be charged ${totalPayment}</p>
          </div>
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
    )
  
  }

export default Form;
