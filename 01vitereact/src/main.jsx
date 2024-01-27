import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HelloWorld from './helloworld.jsx'

function Myapp(){
  return(
    <div>
      <h1>we can declare function here</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
const reactElement =React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'click me to visit google!'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // Myapp() //we can call above function like this 
  // anotherElement // this also will work
  // reactElement   //we can also do this
  <HelloWorld/>
)
