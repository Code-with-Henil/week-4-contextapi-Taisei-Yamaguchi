// DisplayCurrency.jsx
import React, { useContext } from 'react';
import { CurrencyContext } from './context/CurrencyContext';
const DisplayCurrency = () => {
    const { currentCurrency } = useContext(CurrencyContext);

    return (
        <div>
        <h2>Current Currency:</h2>
        <p>{currentCurrency}</p>
        </div>
    );
};

export default DisplayCurrency;
