import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { INITIAL_INPUT } from './util/config';

export default function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);
  const isValid =
    userInput.duration >= 1 ? (
      <Result resultInput={userInput} />
    ) : (
      <p className="center">Please enter duration (year) greater than zero.</p>
    );

  return (
    <>
      <Header />
      <UserInput setValue={setUserInput} inputState={userInput} />
      {isValid}
    </>
  );
}
