import React, { useContext } from "react";
import "../App.css";
import AuthContext from "./my-context";

function Header() {
  const {
    fromAmountInHeader,
    fromCurrencyInHeader,
    toAmountInHeader,
    toCurrencyInHeader,
  } = useContext(AuthContext);

  return (
    <>
      <p>
        {fromAmountInHeader} {fromCurrencyInHeader} entspricht
      </p>
      <h2>
        {toAmountInHeader} {toCurrencyInHeader}
      </h2>
    </>
  );
}

export default Header;
