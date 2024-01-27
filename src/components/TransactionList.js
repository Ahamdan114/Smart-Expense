import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className="history-title">History</h3>
            <ul id="list" className="list history-review">
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </>
    );
}
