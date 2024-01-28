import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./Balance.css";

export default function Balance() {
    const { transactions, currency, changeCurrency } = useContext(GlobalContext);
    const [showCurrency, setShowCurrency] = useState(false);
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    const currencies = JSON.parse(localStorage.getItem("currencyList"));
    console.log(currency)
    return (
        <>
            <h4>Your Balance</h4>
            <div className="balance-container">
                <h1>{currency}{" "}{total}</h1>
                <button onClick={() => setShowCurrency(!showCurrency)}>Currency {showCurrency ? "↓" : "→"}</button>
            </div>
            {showCurrency && <ul className="balance-currency-list">{currencies.map((curency, i) => {
                    return <li key={i} className="balance-currency" onClick={(e) => {
                        changeCurrency(e.target.textContent)
                        setShowCurrency(false)
                    }}>{curency[0]}</li>
                })}</ul>}
        </>
    );
}
