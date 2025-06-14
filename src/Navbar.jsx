// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import useIsMobile from './mobilefinder.jsx'
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const isMobile = useIsMobile();

  const linkStyle = {
    margin: isMobile ? '0 10px' : '0 40px',
  };

  return (
    <nav className="nav" style={{ padding: isMobile ? '12px 0' : '10px 0' }}>
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        style={linkStyle}
      >
        HOME
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        style={linkStyle}
      >
        GALLERY
      </NavLink>
      <NavLink
        to="/offer"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        style={linkStyle}
      >
        OFFER
      </NavLink>
      <NavLink
        to="/booking"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        style={linkStyle}
      >
        BOOKING
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        style={linkStyle}
      >
        CONTACT
      </NavLink>
    </nav>
  );
}

export default Navbar;
