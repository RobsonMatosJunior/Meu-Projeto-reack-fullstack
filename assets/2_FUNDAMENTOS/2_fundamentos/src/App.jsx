//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

import { useState } from 'react'

//Style Css
import './App.css'


function App() {
    return (
   <div className='app'>
    <FirstComponent />
    <TemplateExpressions />
    <MyComponent />
    <Events />
    <Challenge />

   </div>
  )
}

export default App
