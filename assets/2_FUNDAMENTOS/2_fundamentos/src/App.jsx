//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

import { useState } from 'react'

//Style Css
import './App.css'


function App() {
    return (
   <div className='app'>
    <h1>Fundamentos React</h1>
    <FirstComponent />
    <TemplateExpressions />

   </div>
  )
}

export default App
