import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
    transactions: [],
};

const currencies = JSON.parse(localStorage.getItem("currencyList"));

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [currency, setCurrency] = useState(currencies[31][0]);
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
                currency: currency,
                changeCurrency(currency) {
                    setCurrency(currency)
                },
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
