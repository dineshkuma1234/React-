import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componet/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"dinesh",
    age:21,
  }

  let newArr=[1,2,3,44,5,6,7,8,9]

  return (
    <>
     <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card userName="dinesh" btnText="visit me " /*someObj={myObj} someArrary={newArr}*/ />
     <Card userName="shyam"/>
    
    </>
  )
}

export default App
