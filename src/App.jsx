import Header from "./components/header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, value){
      setUserInput(prevUserInput => {
          return {...prevUserInput, [inputIdentifier]: +value}
      });
  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Duration must be greater than 0</p>}

      {inputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
