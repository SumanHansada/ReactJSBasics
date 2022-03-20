import React, { useCallback, useState } from "react";

function InputBox() {
  const [textValue, setTextValue] = useState("");
  const [apiCallCount, setApiCallCount] = useState(0);
  const [eventFiredCount, setEventFiredCount] = useState(0);
  const [titles, setTitles] = useState([]);
  const api =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const makeApiCall = (query = "") => {
    setApiCallCount((prevCount) => prevCount + 1);
    if (!query) setTitles([]);
    var apiResponse = fetch(api + query)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
        setTitles([]);
      });
    apiResponse.then((res) => {
      let tempArr = [];
      res &&
        res.results &&
        res.results.forEach((obj) => {
          tempArr.push(obj.title);
        });
      console.log(tempArr);
      setTitles(tempArr);
    });
  };

  const debounce = (func, wait) => {
    let timeout;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(self, args);
      }, wait);
    };
  };

  const throttle = (func, wait) => {
    let timeout;
    return function () {
      let self = this;
      let args = arguments;
      if (timeout) return;
      timeout = setTimeout(() => {
        func.apply(self, args);
        timeout = null;
      }, wait);
    };
  };

  const debouncedAPICall = useCallback(
    debounce((value) => makeApiCall(value), 5000),
    []
  );

  const throttledAPICall = useCallback(
    throttle((value) => makeApiCall(value), 5000),
    []
  );

  const handleTextChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setTextValue(value);
    setEventFiredCount((prevCount) => prevCount + 1);
    // debouncedAPICall(value);
    throttledAPICall(value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
      <div>No of times event fired - {eventFiredCount}</div>
      <div>No of times API called - {apiCallCount}</div>
      <div>Results - </div>
      <div>
        {titles.length &&
          titles.map((x, index) => <span key={index}>{x}, </span>)}
      </div>
    </div>
  );
}

export default InputBox;
