/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateHook from "./examples/hooks/useState/StateHook";
import EffectHook from "./examples/hooks/useEffect/EffectHook";
import MyOwnHook, { MyOwnHook2 } from "./examples/hooks/useMyOwnHook/MyOwnHook";

function App() {
  return (
    <div className="App">
      <StateHook />
      <EffectHook />
      <MyOwnHook />
      <MyOwnHook2 />
    </div>
  );
}

export default App;
