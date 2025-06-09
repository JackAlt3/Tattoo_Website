// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link active">HOME</Link>
      <Link to="/gallery" className="nav-link">GALLERY</Link>
      <Link to="/offer" className="nav-link">OFFER</Link>
      <Link to="/booking" className="nav-link">BOOKING</Link>
      <Link to="/contact" className="nav-link">CONTACT</Link>
    </nav>
  );
}

export default Navbar;