import { useState } from 'react'


import './App.css'
import Header from './Header.jsx'

function App() {
let test = {
  height : "1000px",
  backgroundColor : "blue",
}
  return (
    <div>
      <Header></Header>
    
      <div style={test}></div>
    </div>
  )
}

export default App
