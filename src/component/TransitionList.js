import React,{useContext} from 'react';
import {expensesContext} from "../context/expensesContext";

export default function TransitionList({transaction}) {
    const {removeTransaction} = useContext(expensesContext);
    return (
        <>
            <li className={transaction.amount >0 ? "plus":"minus"}>
                {transaction.text} <span>{transaction.amount >0 ? "":"-"} $ {Math.abs(transaction.amount)} </span>
                <button onClick={e=>{
                     removeTransaction(transaction.id);
                     e.preventDefault();
                }} className="delete-btn">x</button>
            </li>
        </>
    )
}
