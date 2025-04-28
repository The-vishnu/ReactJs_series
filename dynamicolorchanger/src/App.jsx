import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Style.css'

function App() {
  const [color, setColor] = useState('')
  const [intervalId, setIntervalId] = useState(null)

  const randomColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }

  const startChanging = () =>{
    if(!intervalId){
      const id = setInterval(() => {
        setColor(randomColor())
      }, 1000);
  
      setIntervalId(id)
    }
    }


    const stopChanging = () =>{
      clearInterval(intervalId)
      setIntervalId(null)
    }

  return (
    <>
      <div className='w-full h-screen text-white justify-items-center gap-2 duration-500' style={{backgroundColor: color}}>
        <h1 className='bottom p-6 text-4xl text-gray-400'>Dynamic Color Changer</h1>
        <div className='flex gap-2'>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={startChanging}>
           Start
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={stopChanging}>
              Stop
        </button>
        </div>
      </div>

    </>
  )
}

export default App
