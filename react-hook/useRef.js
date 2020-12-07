import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const potato = useRef(); //input태그의 정보를 가져온다.
  //console.log(potato);
  setTimeout(() => potato.current.focus(), 5000); //5초 뒤 클릭
  console.log(potato);
  return (
    <div className="App">
      <h2>Start</h2>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);