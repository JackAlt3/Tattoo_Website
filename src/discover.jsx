import React from 'react';
import './discover.css';
import { Link } from 'react-router-dom';
import Arrow from './assets/arrow.png'; // Or replace with a suitable icon/SVG
import useIsMobile from './mobilefinder.jsx'
import Artist from './assets/artist.jpg';

function Discover() {
  const isMobile = useIsMobile();
  return (
    <div className="discover-container">
      <div className="discover-left" style={{ display : isMobile ? 'none' : 'flex'}}>
        <img src={Artist} alt="Tattoo Artist" className="discover-image" />
      </div>

      <div className="discover-right">
        <h2 className="discover-heading">Discover Our Art</h2>
        <p className="discover-text">
          Travel through a curated gallery of our tattoo art. From the gentle subtlety of minimalist lines,
          to the boldness of neo-traditional and the stunning depth of realism, we tattoo as unique 
          representations of the stories we help tell on your skin. We embrace a collaborative process 
          where you are able to take your idea and turn it into a permanent piece of art.
        </p>

        <div className="discover-arrows">
            <Link to="/gallery" >
            <img src={Arrow} alt="Arrow" className='arrows'/>
           </Link>
        </div>
      </div>
    </div>
  );
}

export default Discover;
