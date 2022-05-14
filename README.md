This project is structured in different components:

- MainPage where all other components are imported. 
- Header component
- FromCurrencyComponent
- ToCurrencyComponent

I have used react hooks like: 
- useContext() to return context values
- userEffect() to run the effects after every render
- useState() to preserve a state before components


Changes intended to be pushed to "MainPage.tsx", but not pushed due to errors with API endpoints:

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
