import React, { useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import MyContext from "./my-context";
import FromCurrencyController from "./FromCurrencyController";
import ToCurrencyController from "./ToCurrencyController";
import axios from "axios";

function MainPage() {
  const {
    CURRENCIES_URL,
    BASE_EXCHANGE_URL,
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
    setFromAmountInHeader,
    setFromCurrencyInHeader,
    setToAmountInHeader,
    setToCurrencyInHeader,
  } = useContext(MyContext);

  let amount;
  if (amountInFromCurrencyRow) {
    amount = fromAmount;
    setFromAmountInHeader(fromAmount);
    setFromCurrencyInHeader(fromCurrency);
    setToAmountInHeader(toAmount);
    setToCurrencyInHeader(toCurrency);
  } else {
    amount = toAmount;
    setFromAmountInHeader(toAmount);
    setFromCurrencyInHeader(toCurrency);
    setToAmountInHeader(fromAmount);
    setToCurrencyInHeader(fromCurrency);
  }

  useEffect(() => {
    fetch(CURRENCIES_URL)
      .then((res) => res.json())
      .then((data) => {
        const dataArray = [...Object.keys(data)];
        setCurrencyOptions(dataArray);
        setFromCurrency(dataArray[0]);
        setToCurrency(dataArray[1]);
      });
  }, []);

  //this will be rendered anytime fromCurrency, toCurrency or fromAmount changes
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      //make a GET request with axios
      //check if the change is done in "FromCurrencyController", or "ToCurrencyController"
      axios
        .get(
          amountInFromCurrencyRow
            ? `${BASE_EXCHANGE_URL}to=${toCurrency}&from=${fromCurrency}&amount=${fromAmount}`
            : `${BASE_EXCHANGE_URL}to=${fromCurrency}&from=${toCurrency}&amount=${toAmount}`,
          {
            headers: {
              apikey: "oQM6mH1H3aP4KzYAwwDqKRVxNlwRIVn1",
            },
          }
        )
        .then((response) => {
          amountInFromCurrencyRow
            ? setToAmount(response.data.result)
            : setFromAmount(response.data.result);
        });
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);

  return (
    <>
      <Header />
      <FromCurrencyController />
      <br />
      <br />
      <ToCurrencyController />
    </>
  );
}

export default MainPage;
