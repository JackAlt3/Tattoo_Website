import { useState } from 'react'
//import './App.css'
import Header from './Header.jsx'
import HeaderM from './HeaderMobile.jsx'
import Navbar from './Navbar';
import Midtxt from './Midtext.jsx'
import MidScroll from './midscroll.jsx'
import Main from './assets/background.jpg'

function App() {
let test = {
    width: '100%',
    height: '100vh', // Full screen height
    backgroundSize: 'cover', // Maintain aspect ratio and cover
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat',
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
          
      {/* rest of your site content */}
      <div style={test}>
        <Navbar />
        <Midtxt> </Midtxt>
      </div>
      <div style = {{overflow : 'hidden', 
      }}>
        <MidScroll/>
        <h1><a href='/about'>Router</a></h1>
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