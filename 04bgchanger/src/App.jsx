import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  // function changeColor (color){
  //   setColor(color)
  // }
  return (
    
    <div style={{width:'100vw',backgroundColor:color,height:'100vh'}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button /*onClick={()=>changeColor('red')} */ onClick={()=>setColor('red')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'style={{backgroundColor:'red'}}>red</button>
            <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:'yellow'}}>yellow</button>
            <button onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:'pink'}}>pink</button>
          </div>
        </div>
    </div>
  )
}

export default App
