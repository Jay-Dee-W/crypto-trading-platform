//components
import Header from "./Header/Header";
import CoinsComponent from "./Coins/Coins";
import Holdings from "./Holdings/Holdings";
import Transactions from "./Transactions/Transactions";
import Form from "./Form/Form";

import { StateContextProivder } from './_contexts/StateContext';

function App() {
  // console.log( StateContextProivder )
  return (
    <StateContextProivder >
      <div className="App">
        <Header />
        <CoinsComponent />
        <div className="stats">
          <Holdings />
          <Transactions />
        </div>
         <Form /> 
      </div>
    </StateContextProivder> 
  );
}

export default App;
