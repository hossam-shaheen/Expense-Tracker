import React,{useReducer} from 'react';
import { expensesContext } from './expensesContext';
import { expensesReducer } from './expenseReducer';

function ExpensesProvider({children}) {

    const initState = {
        transactions:[]
    }

    const [state, dispatch] = useReducer(expensesReducer, initState)
    
    const addTransaction = (transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    const removeTransaction = (id)=>{
        dispatch({
            type:"REMOVE_TRANSACTION",
            payload:id
        })
    }

    return (
        <expensesContext.Provider value={{
            transactions:state.transactions,
            addTransaction,
            removeTransaction
        }}>
            {children}
        </expensesContext.Provider>
    )
}

export default ExpensesProvider;