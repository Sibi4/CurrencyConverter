import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyController from "./components/CurrencyController";
import Header from "./components/Header";
import FromCurrencyController from "./FromCurrencyController";
import ToCurrencyController from "./ToCurrencyController";

const CURRENCIES_URL = "https://openexchangerates.org/api/currencies.json";
const BASE_EXCHANGE_URL = "https://api.apilayer.com/exchangerates_data/convert";

function StartingPage() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState();
  const [amountInFromCurrencyRow, setAmountInFromCurrencyRow] = useState(true);

  let amount;
  if (amountInFromCurrencyRow) {
    amount = fromAmount;
  } else {
    amount = toAmount;
  }

  useEffect(() => {
    fetch(CURRENCIES_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([...Object.keys(data)]);
        setFromCurrency(data[0]);
        setToCurrency(data[0]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${BASE_EXCHANGE_URL}to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        {
          method: "GET",
          headers: {
            apikey: "5Nmb623Px2chZq3lA2Z5Vxwr5YEhNOJb",
          },
        }
      )
        .then((res) => {
          res.json();
        })
        .then((data) => {
          setToAmount(data.result);
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrencyRow(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrencyRow(false);
  }

  return (
    <>
      <Header
        fromAmountInHeader={fromAmount}
        selectedCurrency={fromCurrency}
        toAmountInHeader={toAmount}
        selectedToCurrencyInHeader={toCurrency}
      />
      <FromCurrencyController
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <br />
      <br />
      <ToCurrencyController
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
}

export default StartingPage;
