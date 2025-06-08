// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-link active">HOME</a>
      <a href="#gallery" className="nav-link">GALLERY</a>
      <a href="#offer" className="nav-link">OFFER</a>
      <a href="#booking" className="nav-link">BOOKING</a>
      <a href="#contact" className="nav-link">CONTACT</a>
    </nav>
  );
}

export default Navbar;