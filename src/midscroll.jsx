import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

function MidScroll() {
  const images = [image1, image2, image3, image4, image5];

  const screenwidth = window.innerWidth; // For dynamic screen width

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
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {images.map((source, index) => (
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