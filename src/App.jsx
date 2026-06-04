import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

const initialInput = {
  initialInvestment: 1000,
  annualInvestment: 10000,
  expectedReturn: 5,
  duration: 3,
};

export default function App() {
  const [userInput, setUserInput] = useState(initialInput);
  // const inputHandler = function (e) {
  //   setUserInput(prevInput => {
  //     const userInput = e.target.value;
  //     const targetInput = e.target.name;
  //     const newInputValue = { ...prevInput };
  //     newInputValue[targetInput] = Number(userInput);
  //     const calcResult = calculateInvestmentResults(newInputValue);
  //     console.log(newInputValue);
  //     console.log(calcResult);
  //     return newInputValue;
  //   });
  // };

  return (
    <>
      <Header />
      <UserInput setValue={setUserInput} inputState={userInput} />
      {/* <UserInput /> */}
      <Result resultInput={userInput} />
    </>
  );
}
