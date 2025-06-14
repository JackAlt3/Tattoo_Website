import React, { useState } from 'react';
import HeaderM from './HeaderMobile.jsx';
import Navbar from './Navbar';
import image1 from './assets/tattoos/fine.png';
import image2 from './assets/tattoos/letter.png';
import image3 from './assets/tattoos/real.png';
import image4 from './assets/tattoos/matching.png';
import image5 from './assets/tattoos/mini.png';
import image6 from './assets/tattoos/geom.png';

const images = [
  { src: image1, alt: 'Tattoo 1', type: 'Abstract' },
  { src: image2 , alt: 'Tattoo 2', type: 'Realism' },
  { src: image3 , alt: 'Tattoo 3', type: 'Minimal' },
  { src: image4 , alt: 'Tattoo 4', type: 'Abstract' },
  { src: image5 , alt: 'Tattoo 5', type: 'Realism' },
  { src: image6 , alt: 'Tattoo 6', type: 'Minimal' },
  { src: image1 , alt: 'Tattoo 7', type: 'Abstract' },
  { src: image2, alt: 'Tattoo 8', type: 'Realism' },
];

const types = ['All', 'Abstract', 'Realism', 'Minimal'];

function Gallery() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredImages =
    selectedType === 'All'
      ? images
      : images.filter(img => img.type === selectedType);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      <style>{`
        .gallery-container {
          background: #111;
          padding: 40px 20px;
          color: #fff;
          min-height: 100vh;
        }
        .gallery-main-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 18px;
          margin-top: 10px;
          color: #fff;
        }
        .gallery-description {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 38px auto;
          color: #e6e6e6;
          line-height: 1.5;
        }
        .gallery-filters {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 32px;
        }
        .gallery-filter-btn {
          padding: 10px 24px;
          border: 2px solid #fff;
          background: #181818;
          color: #fff;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-family: 'Playfair Display', serif;
        }
        .gallery-filter-btn.active, .gallery-filter-btn:hover {
          background: #fff;
          color: #181818;
        }
        .gallery-of-works-title {
          font-family: 'Dancing Script', cursive;
          font-size: 2.2rem;
          color: #FFD700;
          text-align: center;
          margin: 40px 0 24px 0;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .gallery-line {
          font-family: Arial, sans-serif;
          font-size: 1rem;
          color: #fff;
        }
        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }
        .gallery-item {
          background: #222;
          border-radius: 8px;
          overflow: hidden;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      <HeaderM />
      <Navbar />
      <div className="gallery-container">
        <h1 className="gallery-main-title">Gallery</h1>
        <div className="gallery-description">
          Explore our curated collection of tattoo styles and inspirations.
        </div>
        <div className="gallery-filters">
          {types.map(type => (
            <button
              key={type}
              className={`gallery-filter-btn${selectedType === type ? ' active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="gallery-of-works-title">
          Gallery of Works <span className="gallery-line">--------------------</span>
        </div>
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;