import axios from "axios";

const apiEndpointUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const useCurrencyConvert = async (fromCurrency) => {
  console.log("called useCurrencyConvert");
  const { data: response } = await axios.get(
    apiEndpointUrl + `${fromCurrency}.json`
  );
  console.log(apiEndpointUrl + `${fromCurrency}.json`);
  return response;
};

export default useCurrencyConvert;
