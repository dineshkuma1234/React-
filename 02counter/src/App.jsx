import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);


const addValue=()=>{
  if(counter<20){
    setCounter(counter+1);
    setCounter(prevCounter=>prevCounter+1)
    
  }
}
const resetValue=()=>{
  setCounter(0)
}

const removeValue=()=>{
  if(counter>0){
    setCounter(counter -1)
  }
}
  return (
    <>
     <h1>library or react</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br/><br/>
     <button onClick={removeValue}>Remove value</button>
     <br/><br/>
     <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
