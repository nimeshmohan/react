import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 rounded-md p-3'>vite with Tailwind</h1>
      <Card username="Nimesh"/>
      <Card post ="Developer"/>
    </>
  )
}

export default App
