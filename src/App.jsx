import { useState } from 'react'
import './App.css'
import HeaderM from './HeaderMobile.jsx'
import Navbar from './Navbar';
// import Midtxt from './Midtext.jsx'
import NeonText from './neontext.jsx';
import MidScroll from './midscroll.jsx'
import Main from './assets/background.jpg'
import Discover from './discover.jsx';
import Ink from './inkstyle.jsx'
import MasterpieceSection from './masterpiece.jsx';
import Footer from './footer.jsx';
import useIsMobile from './mobilefinder.jsx'
import Artist from './assets/artist.jpg';

function App() {
const isMobile = useIsMobile();


let test = {
    width: '100%',
    height: '100vh', // Full screen height
    backgroundSize: 'cover', // Maintain aspect ratio and cover
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat',
    backgroundImage: isMobile ? `url(${Artist})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Main})`,
    // filter: isMobile ? 'grayscale(100%)' : 'none'
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Main})`,
}


let gray = {
  width: '100%',
  position: 'absolute',
    height: '100vh', // Full screen height
    backgroundSize: 'cover', // Maintain aspect ratio and cover
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat',
    backgroundImage: isMobile ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Artist})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Main})`,
    filter: isMobile ? 'grayscale(100%)' : 'none',
    zIndex: 0,
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
        <div style={gray}></div> {/* Background Layer */}
        <div style={{ position: 'relative', zIndex: 1 }}> {/* Content Layer */}
        <Navbar />
        <NeonText/>
        </div>
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
   