// CurrencyContext.js
import React, { createContext, useState } from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currentCurrency, setCurrentCurrency] = useState('1 $');

    const changeCurrency = (newCurrency) => {
        setCurrentCurrency(newCurrency);
    };

    return (
        <CurrencyContext.Provider value={{ currentCurrency, changeCurrency }}>
        {children}
        </CurrencyContext.Provider>
    );
};

export { CurrencyProvider, CurrencyContext };
