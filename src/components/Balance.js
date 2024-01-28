import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./Balance.css";

export default function Balance() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    const currency = JSON.parse(localStorage.getItem("currencyList"));
    console.log(currency)
    return (
        <>
            <h4>Your Balance</h4>
            <div className="">
                <h1>${total}</h1>
                <button>Currency</button>
            </div>
        </>
    );
}
