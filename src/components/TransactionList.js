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
    }, [transactions.length]);

    return (
        <>
            <div className="category-header history-header">
                <h3 className={hasShadow ? "history-title" : ""}>History</h3>
                {transactions.length > 0 && <h3>Insertions: {transactions.length}</h3>}
            </div>
            {transactions.length > 0 ? (
                <ul id="list" className="list history-review">
                    {transactions.map((transaction) => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            ) : (
                <p
                    className="no-history"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    No history
                </p>
            )}
        </>
    );
}
