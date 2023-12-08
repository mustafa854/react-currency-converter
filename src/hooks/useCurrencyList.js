import axios from "axios";

const apiEndpointUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const useCurrencyList = async () => {
  console.log("called useCurrencyList");
  const { data: response } = await axios.get(apiEndpointUrl + "usd.json");

  const currencyList = Object.keys(response.usd);
  console.log(currencyList);
  console.log("hi");
  return currencyList;
};

export default useCurrencyList;
