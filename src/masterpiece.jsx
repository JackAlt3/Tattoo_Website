import React from 'react';
import './masterpiece.css';
import leafImage from './assets/leaf.png'; // make sure this path is correct

const MasterpieceSection = () => {
  return (
    <div className="masterpiece-wrapper">
      {/* <img src={leafImage} alt="Leaf Left" className="leaf left-leaf" /> */}
      <div className="masterpiece-box">
        <img src={leafImage} alt="Leaf Left" className="leaf left-leaf" />
        <img src={leafImage} alt="Leaf Right" className="leaf right-leaf" />
        <h2 className="titles">Ready for Your Masterpiece?</h2>
        <p className="description">
          Your story deserves to be told in ink. Whether you have a complete vision or a rough idea,
          our artists are here to guide you...
        </p>
        <div className="buttons">
          <a href="/booking" className="btn" >Book Appointment</a>
          {/* <button className="btn">Book Appointment</button> */}
          <a href="/contact" className="btn" >Contact Us</a>
          {/* <button className="btn">Contact Us</button> */}
        </div>
      </div>
      {/* <img src={leafImage} alt="Leaf Right" className="leaf right-leaf" /> */}
    </div>
  );
};

export default MasterpieceSection;
