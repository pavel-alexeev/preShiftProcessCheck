import React, { useState } from "react";
import "./ShiftSelection.css";
import ProductSelection from "./ProductSelection";

const ShiftSelection = () => {
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [shiftTime, setShiftTime] = useState("");
  const [show, setShow] = useState("");

  const selectDay = (e) => {
    setDate(e.target.value);
  };

  const selectShift = (e) => {
    setShift(e.target.value);
  };

  const startTime = (e) => {
    setShiftTime(e.target.value);
  };

  const enteredData = (e) => {
    e.preventDefault();
    setShow(!show);

    return <ProductSelection />;
  };
  let savedData = {
    date: date,
    shift: shift,
    shiftTime: shiftTime,
  };
  console.log(savedData);

  return (
    <div className="form-container">
      {!show && (
        <form onSubmit={enteredData}>
          <input type="date" onChange={selectDay} />
          <select onChange={startTime}>
            <option value="" selected disabled hidden>
              Start Time
            </option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <div>
            <select onChange={selectShift}>
              <option value="" selected disabled hidden>
                Shift
              </option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {show && <ProductSelection />}
    </div>
  );
};

export default ShiftSelection;
