import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const minValue = 0;

  const handleIncrement = () => setCounter((prev) => prev + step);
  const handleDecrement = () =>
    setCounter((prev) => Math.max(minValue, prev - step));
  const handleReset = () => setCounter(0);
  const handleStepChange = (e) => setStep(Number(e.target.value));

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Counter Application</h1>
      <div style={{ fontSize: 48, margin: 20 }}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increase by {step}</button>
        <button onClick={handleDecrement}>Decrease by {step}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <label>
          Set Increment/Decrement Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            style={{ marginLeft: 10 }}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
