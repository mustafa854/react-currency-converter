import React from "react";
import { apiEndpointUrl } from "../config/apiEndpoint";
import axios from "axios";

const useCurrencyList = async () => {
  console.log("called useCurrencyList");
  const { data: response } = await axios.get(apiEndpointUrl + "usd.json");

  const currencyList = Object.keys(response.usd);
  console.log(currencyList);
  console.log("hi");
  return currencyList;
};

export default useCurrencyList;
