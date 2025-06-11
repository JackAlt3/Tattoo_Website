import React, { useState, useEffect } from 'react';
import { MapPin, Phone as PhoneIcon, Instagram, MessageCircleMore } from 'lucide-react';
import Logo from './assets/logocrop.png';
// import Sidebar from './assets/sidebar.svg';
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
    height: isMobile ? '35px' : '45px',
    backgroundColor: 'black',
    zIndex: 2,
  };

  const leftStyle = {
    width: isMobile ? '30%' : '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
  };

  const rightStyle = {
    width: isMobile ? '70%' : '50%',
    display: 'inline-block',
    textAlign: 'right',
  };

  const logoStyle = {
    paddingTop: '20px',
    paddingLeft: '10px',
    width: isMobile ? '155px' : '170px', // Adjust based on mobile or desktop
    height: isMobile ? '65px' : '50px',
  };

  const buttonStyle = {
    borderRadius: '5px',
    width: isMobile ? '50px' : '80px', // Adjust button size based on mobile or desktop
    height: isMobile ? '35px' : '50px',
    marginLeft: isMobile ? '5px' : '10px',
  };
  
  const imagr = {
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
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={rightStyle}>
<a href="https://maps.app.goo.gl/oYzeQzUGmfkcrMkg8" className="icon-link" style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
  <MapPin  size={isMobile ? 24 : 24} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
</a>

<a href="http://api.whatsapp.com/send?phone=7507209441" className="icon-link" style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
  <MessageCircleMore  size={isMobile ? 24 : 24} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
</a>

<a href="tel:+917507209441" className="icon-link" style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
  <PhoneIcon  size={isMobile ? 24 : 24} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
</a>

<a href="https://www.instagram.com" className="icon-link" style={{ marginLeft: '10px', verticalAlign: 'middle' ,paddingRight: '15px', }}>
  <Instagram  size={isMobile ? 24 : 24} style={{ verticalAlign: 'middle' }} />
</a>
      </div>
    </div>
  );
}

export default Header;
