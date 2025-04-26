import { useState } from 'react'
import './Style.css';


export default function App() {

  const [color, setColor] = useState("pink")

  return (
    <div className='w-full h-screen duration-200 flex-grow' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-amber-50 rounded-2xl'>Test</div>
      </div>
    </div>
  )
}
