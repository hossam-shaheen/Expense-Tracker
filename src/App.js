import React from 'react';
import Header from "./component/Header";
import Total from "./component/Total";
import IncomeExpenses from "./component/IncomeExpenses";
import Transitions from "./component/Transitions";
import AddTransaction from "./component/AddTransaction";
import './App.css';
import ExpensesProvider from './context/ExpensesProvider';

function App() {
  return (
    <ExpensesProvider>
      <Header/>
      <div className="container">
        <Total/>
        <IncomeExpenses/>
        <Transitions/>
        <AddTransaction/>
      </div>

    </ExpensesProvider>
  );
}

export default App;
