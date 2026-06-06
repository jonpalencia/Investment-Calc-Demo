export default function UserInput({ inputState, setValue }) {
  const inputHandler = function (e) {
    if (Number(e.target.value) < 0) return;
    setValue(prevInput => {
      const inputValue = Number(e.target.value);
      const targetInput = e.target.name;
      const newInputValue = { ...prevInput };
      newInputValue[targetInput] = inputValue;
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
            value={inputState.initialInvestment}
            onChange={inputHandler}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            type="number"
            value={inputState.annualInvestment}
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
            value={inputState.expectedReturn}
            onChange={inputHandler}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            name="duration"
            type="number"
            value={inputState.duration}
            onChange={inputHandler}
            required
          />
        </p>
      </div>
    </form>
  );
}
