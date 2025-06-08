import React from 'react';

function Navbar() {
  const navStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    fontFamily: 'sans-serif',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '14px',
    letterSpacing: '1px',
    position: 'relative',
  };

  const activeLinkStyle = {
    ...linkStyle,
    fontWeight: 'bold',
    color: '#f5d742', // yellow highlight
    borderBottom: '2px solid #f5d742',
    paddingBottom: '3px',
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={activeLinkStyle}>HOME</a>
      <a href="#gallery" style={linkStyle}>GALLERY</a>
      <a href="#offer" style={linkStyle}>OFFER</a>
      <a href="#booking" style={linkStyle}>BOOKING</a>
      <a href="#contact" style={linkStyle}>CONTACT</a>
    </nav>
  );
}

export default Navbar;
