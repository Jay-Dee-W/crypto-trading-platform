import { createContext, useState } from "react";

const StateContext = createContext({});

export default StateContext;

export function StateContextProivder(props) {
    const [coins, setCoins] = useState([]);
    const [holdings, setHoldings] = useState(
        ["Bitcoin", "Ethereum", "Dogecoin"].map((el) => ({
            coinName: el,
            amount: 0,
            total_paid: 0,
          }))
    );
    const [currentCoin, setCurrentCoin] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [wallet, setWallet] = useState(100)
    const [portfolio, setPortfolio] = useState(0)
    const [transactions, setTransactions] = useState([])

    const globalVariables = {
        coins,
        setCoins,
        holdings,
        setHoldings,
        currentCoin,
        setCurrentCoin,
        showForm,
        setShowForm,
        wallet,
        setWallet,
        portfolio,
        setPortfolio,
        transactions,
        setTransactions
    };

    return (
        <StateContext.Provider value={globalVariables}>
            {props.children}
        </StateContext.Provider>
    )


}