import React, { useState } from "react";
import "./ProductSelection.css";
import ShiftSelection from "./ShiftSelection";

const ProductSelection = () => {
  const [hidden, setHidden] = useState(false);

  //   let table;
  //   if (hidden === "laminate") {
  //     table = <ShiftSelection />;
  //   } else if (hidden === "thermal") {
  //     table = <div>Hello Benjamin</div>;
  //   }

  return (
    <div className="btn-container">
      {!hidden && (
        <button onClick={() => setHidden("laminate")}>Laminate</button>
      )}
      {!hidden && <button onClick={() => setHidden("thermal")}>Thermal</button>}
      {/* {table} */}
    </div>
  );
};

export default ProductSelection;
