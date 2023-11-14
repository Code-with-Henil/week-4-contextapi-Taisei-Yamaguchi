// CurrencySelector.jsx
import React, { useContext } from 'react';
import { CurrencyContext } from './context/CurrencyContext';


const CurrencySelector = () => {
    const { changeCurrency } = useContext(CurrencyContext);

    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        changeCurrency(newCurrency);
    };

    return (
        <div>
        <label htmlFor="currency">Select Currency: </label>
        <select id="currency" onChange={handleCurrencyChange}>
            <option value="1 $">C$</option>
            <option value="0.73 $">US$</option>
            <option value="0.67 €">EU€</option>
            <option value="109.80 ￥">Japanese￥</option>
            <option value="5.30 ￥">Chinese$</option>
            
        </select>
        </div>
    );
};

export default CurrencySelector;
