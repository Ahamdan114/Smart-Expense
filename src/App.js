import React from "react";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import Favicon from "./components/Favicon";

import { useEffect } from "react";

export default function App() {
    const API_KEY = "fca_live_B3RxzgkfjnDVAlqZVuhGqZbIAIV17lP1yU5aGRIb";
    // Future mobile-only redirect
    useEffect(() => {
        // Check if the user is accessing the site from a mobile device
        // const isMobile =
        //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        //         navigator.userAgent
        //     );
        // Redirect to a different URL if the user is not on a mobile device
        // if (!isMobile) {
        //     window.location.replace("https://example.com/mobile-only");
        // }
    }, []);

    useEffect(() => {
        async function getCurrencyList() {
            const res = await fetch(
                `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`
            );
            const data = await res.json();
            // console.log(Object.entries(data.data).sort((a, b) => a[0] - b[0]));
            localStorage.setItem("currencyList", JSON.stringify(Object.entries(data.data).sort((a, b) => a[0] - b[0])));
        }
        getCurrencyList();
    }, []);

    return (
        <GlobalProvider>
            <Favicon />
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}
