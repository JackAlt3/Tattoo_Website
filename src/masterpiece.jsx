import React from 'react';
import './masterpiece.css';
import { Link } from 'react-router-dom';
import leafImage from './assets/leaf.png'; // make sure this path is correct
import useIsMobile from './mobilefinder.jsx'

const MasterpieceSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className="masterpiece-wrapper">
      <div className="masterpiece-box">
        <img src={leafImage} alt="Leaf Left" className="leaf left-leaf" />
        <img src={leafImage} alt="Leaf Right" className="leaf right-leaf" />
        <h2 className="titles">Ready for Your Masterpiece?</h2>
        <p className="description">
          Your story deserves to be told in ink. Whether you have a complete vision or a rough idea,
          our artists are here to guide you...
        </p>
        <div className="buttons">
          <Link to="/booking" className="btn" >Book Appoinment</Link>
          <Link to="/contact" className="btn" >Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default MasterpieceSection;
