import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mb-1'>Your the lucky Customer for us</h1>
      <Card heading="Customers also purchased"/>
      <Card heading="Hot Deals"/>
    </>
  )
}

export default App
