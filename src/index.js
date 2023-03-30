//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
//import App from "./App";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);  //value의 유효성 검사
    }
    if (willUpdate) {
      setValue(value);
    };
  };
  return {value, onChange};
}

const App = () => {
  const maxLen = value => !value.includes("@"); //@가 포함되지 않으면 업데이트
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
