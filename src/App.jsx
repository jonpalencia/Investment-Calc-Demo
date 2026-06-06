import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { INITIAL_INPUT } from './util/config';

export default function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);
  const resultOutput = () => {
    return userInput.duration < 1 ? (
      <p className="center">Please provide the year duration of 1 or more</p>
    ) : (
      <Result resultInput={userInput} />
    );
  };

  return (
    <>
      <Header />
      <UserInput setValue={setUserInput} inputState={userInput} />
      {resultOutput()}
    </>
  );
}
