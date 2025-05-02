import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-black text-white itme-center justify-center p-0 m-0'>
        <h1>Password Mennager</h1>
        <p>Uday Bushettiwar</p>
      </div>
    </>
  )
}

export default App

