import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";

    return (
        <li className={`item-container ${transaction.amount < 0 ? "minus" : "plus"}`}>
            {transaction.text}{" "}
            <div>
                {sign}${Math.abs(transaction.amount)}
            </div>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn"
            >
                X
            </button>
        </li>
    );
}
