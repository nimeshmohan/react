import { useState, useCallback,useEffect,useRef } from 'react'
function TestApp(){

    const [length,setlength] = useState(8)
    const [numberAllowed,setNumberAllowed] = useState(false)
    const [charAllowed,setCharAllowed] = useState(false)
    const [passWord, setPassword] = useState('')

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=>{
        let pass= ""
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz'
        if(numberAllowed) str += '0123456789'
        if(charAllowed) str += '!@#$%^&*_-+={}[]~`'
         for (let i = 0; i<=length; i++) { 
            let char = Math.floor(Math.random()*str.length)
            pass += str.charAt(char)
         }
        setPassword(pass)

    },[length,numberAllowed,charAllowed])
    useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,setPassword])
    const copyPasswordToClipoard = useCallback(()=>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(passWord)
    },[passWord])
    return(
        <div className=" px-3 py-3 my-4 bg-gray-700 max-w-lg rounded-lg text-center w-full">
            <h1 className=" text-white mb-3 ">Password Generator</h1>
            <div className="flex">
                <input 
                className="w-full px-4 py-4 rounded-l-md"
                type=""
                placeholder="Password"
                value={passWord}
                readOnly
                ref={passwordRef}
                />
                <button className="px-4 bg-blue-400 text-black rounded-r-md" onClick={copyPasswordToClipoard} >Copy</button>
            </div>
            <div className="flex justify-between items-center">
                <input type="range"
                    
                    className="my-4"
                    min={8}
                    max={100}
                    onChange={(e)=>{setlength(e.target.value)}}
                />
                <label className="mx-1 text-white mr-4">length: {length} </label>
                <input type="checkbox"
                    className="mx-1"
                    defaultChecked={numberAllowed}
                    onChange={()=>{
                        setNumberAllowed((prev)=>!prev);}}
                />
                <label className=" text-white mr-4">Number</label>
                <input type="checkbox"
                    className="mx-1"
                    defaultChecked={charAllowed}
                    onChange={()=>{
                        setCharAllowed((prev)=>!prev);}}
                />
                <label className=" text-white">Characters</label>
            </div>

        </div>
      

    )
  }

  export default TestApp