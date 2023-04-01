import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
