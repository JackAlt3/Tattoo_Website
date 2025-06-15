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
  { src: image3, alt: 'Tattoo 8', type: 'Realism' },
];

const types = ['All', 'Abstract', 'Realism', 'Minimal'];

function Gallery() {
  const [selectedType, setSelectedType] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of the image in filteredImages

  const filteredImages =
    selectedType === 'All'
      ? images
      : images.filter(img => img.type === selectedType);

const openModal = (index) => {
    setModalIndex(index);
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  const closeModal = () => {
    setModalIndex(null);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % filteredImages.length);
  };

  // Escape key close modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex]);


  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
<style>{`

@font-face {
  font-family: 'MoontimeGallery';
  src: url('./assets/moontime.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.gallery-moontime-title {
  font-family: 'Moontime', cursive;
  font-size: 4.5rem;
  font-weight: normal;
  text-align: center;
  margin-top: 36px;
  margin-bottom: 14px;
  letter-spacing: 1px;
  color: #fff9c4;
  text-shadow:
    0 0 5px #fff176,
    0 0 10px #ffeb3b,
    0 0 20px #fdd835,
    0 0 40px #fdd835,
    0 0 80px #fdd835;
  line-height: 1;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-container {
  background: #111;
  padding: 0px 20px;
  color: #fff;
  min-height: 100vh;
}

.gallery-description {
  font-family: 'Inter', Arial, sans-serif;
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
  font-family: 'Inter', Arial, sans-serif;
}

.gallery-filter-btn.active, .gallery-filter-btn:hover {
  background: #fff;
  color: #181818;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  justify-items: center;
}


.gallery-item {
  background: #111;
  width: auto;
  max-width: 100%;
  height: auto;
  overflow: hidden;
    display: flex;              /* ✅ enable flexbox */
  justify-content: center;    /* ✅ center horizontally */
  align-items: center;        /* ✅ center vertically */
}

.gallery-item img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 0;
}

.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
  }

  .modal-content img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  .modal-close,
  .modal-prev,
  .modal-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    color: #fff;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 0;
    border-radius: 0;
  }


  .modal-close {
    top: 1px;
    right: 10px;
    transform: none;
    font-size: 2.5rem;
  }

  .modal-prev {
    left: -60px;
  }

  .modal-next {
    right: -60px;
  }

@media (max-width: 768px) {
  .gallery-container {
    padding: 0px 10px;
    background: #111;
  }

  .gallery-filters {
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0;
  }

  .gallery-description {
    font-size: 1rem;
    margin: 0 10px 24px 10px;
    color: #e6e6e6;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
    padding: 0;
    margin: 0;
    background: #111;
  }

  .gallery-item {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #111;
    border-radius: 0;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    border-radius: 0;
  }

  .gallery-moontime-title {
    font-size: 2.5rem;
  }

  .modal-prev, .modal-next {
    display: none;
  }
}

`}</style>
      <HeaderM />
      <div className="gallery-container">
        <Navbar />
        <div className="gallery-moontime-title">Gallery of Works</div>
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
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div className="gallery-item" key={idx} onClick={() => openModal(idx)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={filteredImages[modalIndex].src} alt={filteredImages[modalIndex].alt} />
            <button className="modal-prev" onClick={prevImage}>&#10094;</button>
            <button className="modal-next" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;