import React, { useRef, useState, useEffect } from "react";
import useIsMobile from "./mobilefinder";
import "./midScroll.css";
import image1 from './assets/tattoos/fine.png';
import image2 from './assets/tattoos/letter.png';
import image3 from './assets/tattoos/real.png';
import image4 from './assets/tattoos/matching.png';
import image5 from './assets/tattoos/mini.png';
import image6 from './assets/tattoos/geom.png';

function MidScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const isMobile = useIsMobile(); 

  const SAMPLE_DATA = [
    { id: "Line Art & Fine Line Tattoos", image: image1 , link : "http://www.google.com"},
    { id: "Script & Lettering Tattoos", image: image2 , link : "www.youtube.com"},
    { id: "Realistic Tattoos", image: image3 , link : "www.google.com"},
    { id: "Matching Tattoos", image: image4 , link : "www.google.com"},
    { id: "Minimalist Tattoos", image: image5 , link : "www.google.com"},
    { id: "Symbolic / Geometric Tattoos", image: image6 , link : "www.google.com"},
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
    <div className="container" style={{ background: "transparent", position: "relative" }}>
      <button className="side-btn left" onClick={() => handleScroll(-200)}></button>

      <div
        ref={containerRef}
        className="scroll-container"
        style={{
          width: "100%",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
        }}
      >
        <div className="content-box" style={{ opacity: "1" }}>
          {displayData.map((item, index) => (
            <a href={item.link} key={index}>
              <div className="card" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="card-footer">
                <p>{item.id}</p>
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button className="side-btn right" onClick={() => handleScroll(200)}></button>
    </div>
  );
}

export default MidScroll;

