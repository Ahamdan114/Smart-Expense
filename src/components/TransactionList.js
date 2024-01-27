import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    const [hasShadow, setHasShadow] = useState(false);
    function verifyHistory() {
        if (transactions.length >= 4) setHasShadow(true);
        else setHasShadow(false);
    }
    
    useEffect(() => {
        verifyHistory();
    }, [transactions]);

    return (
        <>
            <h3 className={hasShadow ? "history-title" : ""} style={{}}>
                History
            </h3>
            <ul id="list" className="list history-review">
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
}
