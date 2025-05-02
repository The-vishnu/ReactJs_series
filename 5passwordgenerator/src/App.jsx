import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Style.css'

function App() {
  const [lenght, setLength] = useState(8)
  const [numAllowed, setNumAlloed] = useState(true)
  const [charAllowed, setCharAlloed] = useState(true)

  return (
    <>
      <div className='w-full h-screen itme-center justify-center flex gap-3 bg-red'>
        <h1 className='text-3xl'>Password Generator</h1>
        <div className='my-15 absolute w-[100px] border-rose-500'>
          <input type="text" className='outline-none w-full px-1 py-4' placeholder='password' readOnly/>
        </div>
      </div>

    </>
  )
}

export default App

