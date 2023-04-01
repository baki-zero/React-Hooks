import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");
  useEffect(() => {
    sayHello();
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setaNumber] = useState(0);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
