// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from './mobilefinder.jsx'
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const isMobile = useIsMobile();
  return (
    <nav className="nav" style={{ padding : isMobile ? '12px 0' : '10px 0'}}>
      <Link to="/" className="nav-link active" style={{ margin : isMobile ? '0 10px' : '0 40px'}}>HOME</Link>
      <Link to="/gallery" className="nav-link" style={{ margin : isMobile ? '0 10px' : '0 40px'}}>GALLERY</Link>
      <Link to="/offer" className="nav-link" style={{ margin : isMobile ? '0 10px' : '0 40px'}}>OFFER</Link>
      <Link to="/booking" className="nav-link" style={{ margin : isMobile ? '0 10px' : '0 40px'}}>BOOKING</Link>
      <Link to="/contact" className="nav-link" style={{ margin : isMobile ? '0 10px' : '0 40px'}}>CONTACT</Link>
    </nav>
  );
}

export default Navbar;
