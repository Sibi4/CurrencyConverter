import React, { useContext } from "react";
import "../App.css";
import MyContext from "./my-context";

function ToCurrencyController() {
  //get context values
  const {
    currencyOptions,
    toCurrency,
    setToCurrency,
    toAmount,
    setToAmount,
    setAmountInFromCurrencyRow,
  } = useContext(MyContext);

  function handleOnChangeToAmount(e) {
    setToAmount(e.target.value);
    setAmountInFromCurrencyRow(false);
  }

  return (
    <div>
      <input
        type="number"
        className="input"
        value={toAmount}
        onChange={handleOnChangeToAmount}
      />
      <select
        className="input"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
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

export default ToCurrencyController;
