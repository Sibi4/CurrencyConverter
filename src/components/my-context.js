import React, { createContext, useState } from "react";
//create the context
export const MyContext = createContext();

//create the context provider, we are using useState to ensure that we get reactive values from the context

export const MyProvider = ({ children }) => {
  //the reactive values

  const CURRENCIES_URL = "https://openexchangerates.org/api/currencies.json";
  const BASE_EXCHANGE_URL =
    "https://api.apilayer.com/exchangerates_data/convert?";
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  //a boolean value which helps us to know if we are changing value in "FromCurrencyController" or "ToCurrencyController"
  const [amountInFromCurrencyRow, setAmountInFromCurrencyRow] = useState(true);
  const [fromAmountInHeader, setFromAmountInHeader] = useState();
  const [fromCurrencyInHeader, setFromCurrencyInHeader] = useState();
  const [toAmountInHeader, setToAmountInHeader] = useState();
  const [toCurrencyInHeader, setToCurrencyInHeader] = useState();

  //the store object
  let state = {
    CURRENCIES_URL,
    BASE_EXCHANGE_URL,
    currencyOptions,
    setCurrencyOptions,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    amountInFromCurrencyRow,
    setAmountInFromCurrencyRow,
    fromAmountInHeader,
    setFromAmountInHeader,
    fromCurrencyInHeader,
    setFromCurrencyInHeader,
    toAmountInHeader,
    setToAmountInHeader,
    toCurrencyInHeader,
    setToCurrencyInHeader,
  };

  //wrap the application in the provider with the initialized context
  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

export default MyContext;
