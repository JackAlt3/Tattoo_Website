import { useState } from 'react'
//import './App.css'
import Header from './Header.jsx'
import HeaderM from './HeaderMobile.jsx'
import Midtxt from './Midtxt.jsx'
import MidScroll from './midscroll.jsx'
import Main from './assets/main.jpg'

function App() {
let test = {
  width : "100%",
  height : "1080px",
  backgroundSize: '100% 100%',
  backgroundImage: `url(${Main})`,
}

let gg = {
  height : '100%',
  width : '100%',
  objectFit: 'contain',
}
  return (
    <div>
    <HeaderM></HeaderM>
      <div style={test}>
        <Midtxt/>
      </div>
      <div>
        <MidScroll/>
      </div>
  </div>
  )
}

export default App

/*
    <div>
      <Header></Header>
        <div style={test}>
          <Midtxt/>
        </div>
        <div>
          <MidScroll />
        </div>
    </div>

*/    