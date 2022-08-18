/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateHook from "./examples/hooks/useState/StateHook";
import EffectHook from "./examples/hooks/useEffect/EffectHook";

function App() {
  return (
    <div className="App">
      <StateHook />
      <EffectHook />
    </div>
  );
}

export default App;
