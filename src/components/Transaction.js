import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const [isDelete, setIsDelete] = useState(false);
    const handleClick = () => {
        setTimeout(() => {
            setIsDelete(false);
        }, 5000);
        setIsDelete(true);
    };
    const sign = transaction.amount > 0 ? "+" : "-";

    return (
        <li style={{width: isDelete ? "85%" : "95%"}}
            className={`item-container ${transaction.amount < 0 ? "minus" : "plus"}`}
            onClick={handleClick}
        >
            {transaction.text}
            <div>
                {sign}${Math.abs(transaction.amount)}
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
