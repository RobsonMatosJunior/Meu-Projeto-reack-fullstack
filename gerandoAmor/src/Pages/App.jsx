// Imports
import { useState } from 'react'
import Doe from'../Pages/Doe'


// Import Styles
import '../App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Doe />
    </>
  )
}

export default App
