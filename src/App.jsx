import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyList from "./hooks/useCurrencyList";
import useCurrencyConvert from "./hooks/useCurrencyConvert";

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedValue, setConvertedValue] = useState(0);
  const [toCurrencyList, setToCurrencyList] = useState("inr");
  const [fromCurrencyList, setFromCurrencyList] = useState("usd");
  const [currencyList, setCurrencyList] = useState([]);
  const [response, setResponse] = useState([]);
  const getCurrencyList = async () => {
    const list = await useCurrencyList();
    setCurrencyList(list);
  };

  const callHook = async () => {
    const response = await useCurrencyConvert(fromCurrencyList);
    setResponse(response);
  };
  useEffect(() => {
    callHook();
  }, [fromCurrencyList]);

  const handleSubmit = async () => {
    const result = Number(amount) * response[fromCurrencyList][toCurrencyList];
    setConvertedValue(result);
  };

  const swap = () => {
    let tempCurrency = fromCurrencyList;
    let tempValue = amount;
    setFromCurrencyList(toCurrencyList);
    setAmount(convertedValue);
    setToCurrencyList(tempCurrency);
    setConvertedValue(tempValue);
  };

  useEffect(() => {
    getCurrencyList();
  }, []);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1701839339832-158736f88c0f')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                onChangeAmount={(e) => {
                  setAmount(e.target.value);
                  setConvertedValue(0);
                }}
                selectedList={fromCurrencyList}
                currencyList={currencyList}
                onChangeList={(e) => {
                  setFromCurrencyList(e.target.value);
                  setConvertedValue(0);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedValue}
                onChangeAmount={(e) => {
                  setConvertedValue(e.target.value);
                }}
                currencyList={currencyList}
                selectedList={toCurrencyList}
                onChangeList={(e) => {
                  setToCurrencyList(e.target.value);
                  setConvertedValue(0);
                }}
                disableInput
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert from {fromCurrencyList} to {toCurrencyList}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
