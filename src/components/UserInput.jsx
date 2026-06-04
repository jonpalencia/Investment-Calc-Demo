import { useState } from 'react';
import { calculateInvestmentResults } from '../util/investment';

// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

const initialInput = {
  initialInvestment: 1000,
  annualInvestment: 10000,
  expectedReturn: 5,
  duration: 3,
};

//! TESTING PHASE
export default function () {
  const [userInput, setUserInput] = useState(initialInput);
  const inputHandler = function (e) {
    setUserInput(prevInput => {
      const userInput = e.target.value;
      const targetInput = e.target.name;
      const newInputValue = { ...prevInput };
      newInputValue[targetInput] = Number(userInput);
      const calcResult = calculateInvestmentResults(newInputValue);
      console.log(newInputValue);
      console.log(calcResult);
      return newInputValue;
    });
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            name="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={inputHandler}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={inputHandler}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            name="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={inputHandler}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            name="duration"
            type="number"
            value={userInput.duration}
            onChange={inputHandler}
            required
          />
        </p>
      </div>
    </form>
  );
}
