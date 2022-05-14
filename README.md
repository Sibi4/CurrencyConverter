This project is structured in different components:

- Header component
- FromCurrencyComponent (first row of input and select fields)
- ToCurrencyComponent (second row of input and select fields)
- MainPage where all the components above are imported. 


I have used react hooks like: 
- useContext() to return context values, instead of using props.
- useEffect() to run the effects after every render, including the first render
- useState() to preserve a state before components

The exchange is done vice-versa, that means that "toAmount" for example, is not always the result (the exchanged value), but it can be also the value to be exchanged. The same with "fromAmount", "fromCurrency" and "toCurrency". That's why I have decided to check this using a boolean const like "setAmountInFromCurrencyRow", which is true by default. If the change is done in the second row, this state is set to false, if the change is done in the first row, it is set to true. 



