import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);

  return (
    <div className="counter">
      <p className="title">Counter for Fun</p>
      <p className="number">{count}</p>
      <p className="reset" onClick={() => setCount(0)}>
        Reset
      </p>
      <div className="increase">
        <div onClick={() => setCount((count) => count + 1)}>+</div>
        <div onClick={() => setCount((count) => count - 1)}>-</div>
      </div>
    </div>
  );
}

export default App;
