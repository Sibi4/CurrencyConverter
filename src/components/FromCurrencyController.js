import React, { useContext } from "react";
import "../App.css";
import MyContext from "./my-context";

function FromCurrencyController() {
  const {
    fromCurrency,
    setFromCurrency,
    fromAmount,
    setFromAmount,
    currencyOptions,
    setAmountInFromCurrencyRow,
  } = useContext(MyContext);

  function handleOnChangeFromAmount(e) {
    setFromAmount(e.target.value);
    setAmountInFromCurrencyRow(true);
  }

  return (
    <div>
      <input
        type="number"
        className="input"
        value={fromAmount}
        onChange={handleOnChangeFromAmount}
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
