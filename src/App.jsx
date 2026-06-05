import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { INITIAL_INPUT } from './util/config';

export default function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  return (
    <>
      <Header />
      <UserInput setValue={setUserInput} inputState={userInput} />
      <Result resultInput={userInput} />
    </>
  );
}
