import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//useState 사용예
const App = () => {
  const [item, setItem] = useState(1);
  const increaseButton = () => {
    setItem(item + 1);
  };
  const decreaseButton = () => {
    setItem(item - 1);
  };

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start</h2>
      <button onClick={increaseButton}>increaseButton</button>
      <button onClick={decreaseButton}>decreaseButton</button>
    </div>
  );
};

//일반 state 사용 예
class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    this.increaseButton = () => {
      //this.setState({ item: this.state.item + 1 });
      this.setState((state) => {
        return {
          item: state.item + 1
        };
      });
    };
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start</h2>
        <button onClick={this.increaseButton}>increaseButton</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppUgly />, rootElement);
