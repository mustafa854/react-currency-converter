import React, { useEffect, useState } from "react";
import { apiEndpointUrl } from "../config/apiEndpoint";
import axios from "axios";

const useCurrencyConvert = async (fromCurrency) => {
  console.log("called useCurrencyConvert");
  const { data: response } = await axios.get(
    apiEndpointUrl + `${fromCurrency}.json`
  );
  console.log(apiEndpointUrl + `${fromCurrency}.json`);
  return response;
};

export default useCurrencyConvert;
