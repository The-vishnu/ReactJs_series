import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 7

  const addValue = () =>{
    // counter = counter + 1

    if(counter === 20){
      let [counter, setCounter] = useState(0)
      
    }

    setCounter(counter + 1)
  }

  const subValue = () =>{
    if(counter === 0){
      let [counter, setCounter] = useState(0)

    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>counter App</h1>
      <h2>counter value: {counter}</h2>
      <h2>counter value: {counter}</h2>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
