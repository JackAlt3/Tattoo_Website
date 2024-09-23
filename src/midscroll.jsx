/*


if encountered width problem ----> style = {{width : isMobile ? '85px' : '100px',}}


import React, { useRef, useState } from "react";
import useIsMobile from "./mobilefinder";
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
    <div className="container" >
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
*/

import React, { useRef, useState, useEffect } from "react";
import useIsMobile from "./mobilefinder";
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

  // Double the content to simulate infinite scroll
  const [displayData, setDisplayData] = useState([...SAMPLE_DATA, ...SAMPLE_DATA]);

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  // Infinite scroll effect: detect when user scrolls near the end
  const handleInfiniteScroll = () => {
    const container = containerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Scroll threshold to detect when to append/prepend items
    const threshold = 10;

    if (container.scrollLeft >= maxScrollLeft - threshold) {
      // Scroll reached near the right end, append more items
      setDisplayData((prevData) => [...prevData, ...SAMPLE_DATA]);
    } else if (container.scrollLeft <= threshold) {
      // Scroll reached near the left end, prepend more items
      //setDisplayData((prevData) => [...SAMPLE_DATA, ...prevData]);
      // Adjust scroll position to maintain the user's view
      //container.scrollLeft += SAMPLE_DATA.length * 220; // Adjust based on card width + gap
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      container.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap", // Ensure content scrolls horizontally
        }}
      >
        <div className="content-box">
          {displayData.map((item, index) => (
            <div key={index} className="card" style={{ backgroundColor: item.color }}>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-200)}>Scroll Left</button>
        <button onClick={() => handleScroll(200)}>Scroll Right</button>
      </div>
      <h1>//Can use two finger scroll</h1>
    </div>
  );
}

export default MidScroll;

