import { useState } from 'react'
import './App.css'
import HeaderM from './HeaderMobile.jsx'
import Navbar from './Navbar';
import Midtxt from './Midtext.jsx'
import NeonText from './neontext.jsx';
import MidScroll from './midscroll.jsx'
import Main from './assets/background.jpg'
import Discover from './discover.jsx';
import Ink from './inkstyle.jsx'
import MasterpieceSection from './masterpiece.jsx';
import Footer from './footer.jsx';
// import InfiniteScroll from './InfiniteScroll';

function App() {
let test = {
    width: '100%',
    height: '100vh', // Full screen height
    backgroundSize: 'cover', // Maintain aspect ratio and cover
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Main})`,
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
        <NeonText/>
      </div>
      <Discover></Discover>
      <Ink></Ink>
       {/* <InfiniteScroll items={sampleItems} itemWidth={150} /> */}
        <div style={{ overflowX: 'hidden', overflowY: 'visible' }}>

        <MidScroll/>
       <MasterpieceSection></MasterpieceSection> 
        {/* <h1><a href='/about'>Router</a></h1> */}
      <Footer></Footer>
      </div>
      
  </div>
  )
}

export default App
   