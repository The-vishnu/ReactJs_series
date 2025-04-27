import { useState } from 'react'
import './Style.css';


export default function App() {

  const [color, setColor] = useState("")

  return (
    <div className='w-full h-screen duration-500 flex-grow' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap w-auto px-3 py-2 justify-center gap-3 shadow-2xl bg-amber-50 rounded-2xl'>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>red</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>gray</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>green</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "black"}} onClick={() => setColor("black")}>black</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "orange"}}  onClick={() => setColor("orange")}>orange</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>pink</button>
          <button className='rounded-4xl outline-0 text-amber-50' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue</button>
        </div>
      </div>
    </div>
  )
}
