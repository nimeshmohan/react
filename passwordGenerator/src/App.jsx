import { useState, useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passWord, setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let pass=''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*_-+={}[]~`'
    for (let i = 0; i <= length; i++) {
     
      let char = Math.floor(Math.random()*str.length +1 )
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,setPassword])

  
  return (
    <>
      <div className='max-w-md max-auto shadow-md w-full rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-center text-white my-3'>Password Genoratar</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            
            <input type="text" value={passWord} placeholder='Password' readOnly
              className='outline-none w-full py-1 px-3'
              />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
                type="range" min={6} max={100} value={length} className='cursor-pointer'
                onChange={(e)=>{setlength(e.target.value)}}
           />
            <label >Length: {length}</label>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
                setNumberAllowed((prev)=>!prev);}}
              />
              <label htmlFor="">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
                setCharAllowed((prev)=>!prev);}}
              />
              <label htmlFor="">Characters</label>
            </div>
            
          </div>
        </div>
      
      </div>
    </>
  )
}


export default App; 
