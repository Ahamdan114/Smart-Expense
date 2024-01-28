import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
    transactions: [],
};

const currency = JSON.parse(localStorage.getItem("currencyList"));
console.log(currency)

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: "Delete_Transaction",
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "Add_Transaction",
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                currency: currency[31][0],
                changeCurrency(currency) {
                    dispatch({
                        type: "Change_Currency",
                        payload: currency,
                    });
                },
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
