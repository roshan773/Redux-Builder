import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Theme from './Components/Theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme />
      <Counter />
    </>
  )
}

export default App
