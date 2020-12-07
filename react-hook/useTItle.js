import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTItle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); //title이 변경 되었을때만 updateTitle 실행
  return setTItle;
};

const App = () => {
  const titleUpdator = useTitle("kyungmin");
  return (
    <div className="App">
      <button onClick={() => titleUpdator("hi")}> buttton1</button>
      <h2>Start</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
