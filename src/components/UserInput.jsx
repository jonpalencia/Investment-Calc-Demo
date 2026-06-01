import { useState } from 'react';

// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

const initialInput = {
  initialInput: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

//! TESTING PHASE
export default function () {
  const [userInput, setUserInput] = useState(initialInput);
  const inputHandler = function (e) {
    setUserInput(prevInput => {
      const newInput = e.target.value;
      console.log(newInput);
      return newInput;
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInput}
            onChange={inputHandler}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
