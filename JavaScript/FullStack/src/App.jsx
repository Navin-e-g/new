import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskDef from './Components/ClassComponents/FunctionalComponents/Day3task3'
function App() {
  const [count, setCount] = useState(10000)

  return (
    <>
      <TaskDef/>
    </>
  )
}

export default App