import React, { useState } from "react";
import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//app에서 useInput
const App = () => {
  //실제로 이 부분만 사용해 주면 된다.
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.kyungmin", maxLen);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
