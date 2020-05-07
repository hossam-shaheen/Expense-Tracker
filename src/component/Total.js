import React,{useContext} from 'react';
import {expensesContext} from "../context/expensesContext";

export default function Total() {
    const {transactions} = useContext(expensesContext);

    const balance = transactions.map(transaction=> transaction.amount).reduce((acc,item)=>acc += item , 0).toFixed(2);

    return (<>
        <h4>Your Balance</h4>
        <h1>${balance}</h1>
        </>)
}
