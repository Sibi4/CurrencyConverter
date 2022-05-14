import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import MyContext from "./my-context";

function FromCurrencyController(props) {
  const {
    fromCurrency,
    setFromCurrency,
    fromAmount,
    setFromAmount,
    currencyOptions,
    setAmountInFromCurrencyRow,
  } = useContext(MyContext);

  return (
    <div>
      <input
        type="number"
        className="input"
        value={fromAmount}
        onChange={(e) => {
          setFromAmount(e.target.value);
          setAmountInFromCurrencyRow(false);
        }}
      />
      <select
        className="input"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FromCurrencyController;
