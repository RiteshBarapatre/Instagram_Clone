import { useState } from 'react'
import './App.css'
import Left_side from './components/Left_side'
import Middle from './components/Middle'
import Right_side from './components/Right_side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Left_side/>
      <Middle/>
      <Right_side/>
    </div>
  )
}

export default App
