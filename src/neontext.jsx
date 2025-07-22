import React from 'react';
import './neonText.css';
import Midtxt from './Midtext.jsx'
import useIsMobile from './mobilefinder.jsx'

function NeonText() {
  const isMobile = useIsMobile();
  return (
    <div className="neon-text-container" style={{ paddingTop : isMobile ? '12px' : '100px'}} >
      <p className="neon-text" style={{fontSize : isMobile ? '3.5rem' : '4.5rem',}}>
        Every design is hand-drawn, heart-driven, and one of a kind<br />
        just like <Midtxt></Midtxt>
      </p>
    </div>
  );
}

export default NeonText;
