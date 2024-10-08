//THIS IS ONLY FOR TESTING :0

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
    justifyContent: 'space-between',
    width: '100%',
    height: isMobile ? '85px' : '100px',
    backgroundColor: 'lightgray',
    zIndex: 1,
  };

  const leftStyle = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: isMobile ? '30%' : '50%',
  };

  const rightStyle = {
    width: isMobile ? '70%' : '',
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
    //marginBottom : '10px',
    width:'100px', // Adjust button size based on mobile or desktop
    padding: '20px 30px',
    display: isMobile ? 'none' : '',
    //marginLeft: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={rightStyle}>
        <div style={rightStyle}><button style={bittin}>Khoya hua</button></div>
      
      <img src={Location} alt="Location" style={imagr} /> 
      <img src={Whatsapp} alt="Whatsapp" style={buttonStyle} />  
      <img src={Phone} alt="Phone" style={buttonStyle} />
        <img src={Sidebar} alt="Sidebar" style={buttonStyle} />
        
        
        
      </div>
    </div>
  );
}

export default Header;
