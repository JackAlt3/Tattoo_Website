import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.jpg';
import Sidebar from './assets/sidebar.svg';
import Whatsapp from './assets/whatsapp.svg';
import Phone from './assets/phone.svg';
import Location from './assets/location.svg';
import './header.css';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Effect to handle window resizing and adjust state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Style objects
  const containerStyle = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center', // Vertically center the content
    width: '100%',
    height: isMobile ? '85px' : '100px',
    backgroundColor: 'lightgray',
    zIndex: 1,
  };

  const leftStyle = {
    width: isMobile ? '30%' : '50%',
    //width: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
  };

  const rightStyle = {
    width: isMobile ? '70%' : '50%',
    //width: '50%',
    display: 'inline-block',
    textAlign: 'right',
  };

  const logoStyle = {
    //paddingTop: '10px',
    paddingLeft: '10px',
    width: isMobile ? '155px' : '250px', // Adjust based on mobile or desktop
    height: isMobile ? '65px' : '80px',
  };

  const buttonStyle = {
    //marginTop: '10px',
    borderRadius: '5px',
    width: isMobile ? '50px' : '80px', // Adjust button size based on mobile or desktop
    height: isMobile ? '35px' : '50px',
    marginLeft: isMobile ? '5px' : '10px',
  };
  
  const imagr = {
   // borderRadius: '5px',
    width: isMobile ? '50px' : '80px', // Adjust button size based on mobile or desktop
    height: isMobile ? '35px' : '50px',
    display: isMobile ? '' : 'none',
    marginLeft: isMobile ? '5px' : '10px',
  }

  const bittin = {
    borderRadius: '5px',
    marginBottom : '10px',
    width:'100px', // Adjust button size based on mobile or desktop
    height:'20px',
    display: isMobile ? 'none' : '',
    //marginLeft: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={rightStyle}>
        <a href="https://maps.app.goo.gl/oYzeQzUGmfkcrMkg8" ><button style={bittin}>Locate us</button></a> 
        <a href="https://maps.app.goo.gl/oYzeQzUGmfkcrMkg8" ><img src={Location} alt="Location" style={imagr} /></a> 
        <a href="http://api.whatsapp.com/send?phone=7507209441"><img src={Whatsapp} alt="Whatsapp" style={buttonStyle} /></a>
        <a href="tel:+917507209441"><img src={Phone} alt="Phone" style={buttonStyle} /></a>
        <img src={Sidebar} alt="Sidebar" style={buttonStyle} />
      </div>
    </div>
  );
}

export default Header;
