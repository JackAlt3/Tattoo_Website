/*import React, { useRef, useEffect } from 'react';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

function MidScroll() {
  const images = [image1, image2, image3, image4, image5];
  const scrollRef = useRef(null);
  
  const screenwidth = window.innerWidth;

  // Clone the images to create an infinite loop
  const clonedImages = [...images, ...images]; // Duplicate the images array

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const totalScrollWidth = scrollContainer.scrollWidth / 2; // Half because we duplicate the images

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= totalScrollWidth) {
        // When user reaches the end of the cloned array, reset to the start
        scrollContainer.scrollLeft = 0; // Snap back to the beginning
      } else if (scrollContainer.scrollLeft === 0) {
        // If the user scrolls back to the start, snap to the end of the original array
        scrollContainer.scrollLeft = totalScrollWidth;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: 'darkred',
          padding: 10,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: 'white', fontSize: 25 }}>Marvel Wallpapers</h2>
      </div>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
        }}
      >
        {clonedImages.map((source, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              width: `${screenwidth}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={source}
              alt={`Marvel wallpaper ${index + 1}`}
              style={{
                width: `${screenwidth - 50}px`,
                height: `${screenwidth - 50}px`,
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MidScroll;
*/

import React, { useRef, useState } from "react";
import "./midScroll.css";

function MidScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const SAMPLE_DATA = [
    { id: "01", color: "#014f5e" },
    { id: "02", color: "#015a6b" },
    { id: "03", color: "#016679" },
    { id: "04", color: "#017186" },
    { id: "05", color: "#1a7f92" },
    { id: "06", color: "#348d9e" },
    { id: "07", color: "#4d9caa" },
    { id: "08", color: "#67aab6" },
    { id: "09", color: "#80b8c3" },
  ];

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="container">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box">
          {SAMPLE_DATA.map((item) => (
            <div key={item.id} className="card" style={{ backgroundColor: item.color }}>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-200)}>Scroll Left</button>
        <button onClick={() => handleScroll(200)}>Scroll Right</button>
      </div>
    </div>
  );
}

export default MidScroll;
