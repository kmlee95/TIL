import React, { useState } from "react";

const App = () => {
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
