import { useState } from 'react'
//import './App.css'
import Header from './Header.jsx'
import Starttxt from './Starttxt.jsx'
import Midtxt from './Midtxt.jsx'
import Main from './assets/main.jpg'

function App() {
let test = {
  height : "1000px",
  backgroundImage: "C:/Users/Jason Pereira/OneDrive/Desktop/Tattoo/src/assets/Main.jpg",
}

let gg = {
  height : '100%',
  width : '100%',
  objectFit: 'contain',
}
  return (
    <div>
      <Header></Header>
        <div style={test}>
       <Midtxt/>
        
      </div>
    </div>
  )
}

export default App
