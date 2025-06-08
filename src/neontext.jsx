import React from 'react';
import './NeonText.css';
import Midtxt from './Midtext.jsx'

function NeonText() {
  return (
    <div className="neon-text-container">
      <p className="neon-text">
        Every design is hand-drawn, heart-driven, and one of a kind<br />
        just like <Midtxt></Midtxt>
      </p>
    </div>
  );
}

export default NeonText;
