import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import "./Transaction.css"

export default function Transaction({ transaction, currency}) {
    const { deleteTransaction } = useContext(GlobalContext);
    const [isDelete, setIsDelete] = useState(false);
    const handleClick = () => {
        setTimeout(() => {
            setIsDelete(false);
        }, 5000);
        setIsDelete(true);
    };
    const sign = transaction.amount >= 0 ? "+" : "-";

    return (
        <li style={{width: isDelete ? "85%" : "95%"}}
            className={`item-container ${transaction.amount >= 0 ? "plus" : "minus"}`}
            onClick={handleClick}
        >
            {transaction.text}
            <div>
                {sign}{Math.abs(transaction.amount)}{" "}{currency}
            </div>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn" style={{opacity: isDelete ? 1 : 0}}
            >
                X
            </button>
        </li>
    );
}
