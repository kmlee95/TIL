import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");
  useEffect(() => {
    sayHello(); //ComponentDidmount(렌더링 될 때마다 실행, setNumber, setAnumber 값 변화)
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  //useEffect(sayHello, [number]); number가 업데이트 될 때만 실행
  return (
    <div className="App">
      <h2>Start</h2>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
