import { useState } from 'react'
import Details from './components/details'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Details description="This is a description" />
    </>
  )
}

export default App
