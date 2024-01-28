import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./AddTransaction.css";

export default function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction, currency } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };

        addTransaction(newTransaction);
    };

    return (
        <>
            <h3 className="category-header">Add new transaction</h3>
            <form onSubmit={onSubmit} id="form">
                <div className="form-control">
                    <label htmlFor="text">Transaction</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Transaction..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount in {currency} <br /> (negative - expenses, positive - income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}
