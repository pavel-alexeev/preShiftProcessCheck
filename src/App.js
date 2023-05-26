import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import ProductSelection from "./components/ProductSelection";
import ShiftSelection from "./components/ShiftSelection";

function App() {
  return (
    <div>
      <NavBar />
      <ShiftSelection />
    </div>
  );
}

export default App;
