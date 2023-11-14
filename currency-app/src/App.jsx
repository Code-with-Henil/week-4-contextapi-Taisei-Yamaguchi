// App.jsx
import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import CurrencySelector from './CurrencySelector';
import DisplayCurrency from './CreateDisplayCurrency';

const App = () => {
  return (
    <CurrencyProvider>
      <div className="App">
        <h1>Currency App</h1>
        <CurrencySelector />
        <DisplayCurrency />
      </div>
    </CurrencyProvider>
  );
};

export default App;
