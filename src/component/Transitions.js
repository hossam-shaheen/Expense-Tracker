import React,{useContext} from 'react';
import {expensesContext} from "../context/expensesContext";
import TransitionList from './TransitionList';

export default function Transitions() {
    const {transactions} = useContext(expensesContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction=>(
                    <TransitionList key={transaction.id} transaction={transaction}   />
                ))}
                
            </ul>
        </>
    )
}
