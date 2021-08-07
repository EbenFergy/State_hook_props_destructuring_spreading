import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  const decrease = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };
  const resetBtn = () => setCount((count = 0));

  return (
    <div className="counter">
      <div className="countDis">Quantity = {count}</div>
      <button className="Btn incBtn" onClick={() => setCount(count + 1)}>
        {" "}
        Increase
      </button>
      <button className="Btn decBtn" onClick={decrease}>
        {" "}
        Decrease
      </button>
      <button className="Btn resetBtn" onClick={resetBtn}>
        {" "}
        Reset
      </button>
    </div>
  );
};

export default Counter;
