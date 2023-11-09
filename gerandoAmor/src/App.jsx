// Imports
import { useState } from 'react'
import SectionInfos from './components/SectionInfos'
import SectionCarsd from './components/SectionCards'

// Import Styles
import './App.css'
import './SectionInfos.css'
import './SectionCards.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <SectionInfos />
      </section>
      <section>
        <SectionCarsd />
      </section>  
      
    </>
  )
}

export default App
