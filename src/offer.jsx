import React from 'react';
import HeaderM from './HeaderMobile.jsx';
import Navbar from './Navbar';
import Footer from './footer.jsx';

function Offer() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        @font-face {
          font-family: 'Moontime';
          src: url('./assets/moontime.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        body {
          background: #111;
        }
        .offer-container {
          min-height: 100vh;
          background: #111;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          padding-bottom: 80px;
        }
        .offer-title {
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
        .offer-desc {
          font-family: 'Playfair Display', serif;
          font-size: 1.13rem;
          color: #e6e6e6;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 38px auto;
          line-height: 1.6;
        }
        .offer-list {
          max-width: 900px;
          margin: 0 auto 48px auto;
          display: flex;
          flex-wrap: wrap;
          gap: 36px;
          justify-content: center;
        }
        .offer-card {
          background: rgba(24,25,26,0.98);
          border-radius: 18px;
          border: 1.5px solid #232323;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          padding: 36px 32px 28px 32px;
          min-width: 260px;
          max-width: 340px;
          flex: 1 1 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .offer-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 12px 36px 0 rgba(255,215,0,0.13);
          border-color: #FFD700;
        }
        .offer-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: bold;
          color: #FFD700;
          margin-bottom: 14px;
          text-align: center;
        }
        .offer-card-desc {
          font-size: 1.07rem;
          color: #e6e6e6;
          text-align: center;
          margin-bottom: 18px;
        }
        .offer-card-valid {
          font-size: 0.98rem;
          color: #aaa;
          margin-top: 8px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .offer-list {
            flex-direction: column;
            gap: 28px;
            align-items: center;
          }
          .offer-card {
            width: 100%;
            max-width: 98vw;
          }
        }
        @media (max-width: 600px) {
          .offer-title {
            font-size: 2.5rem;
          }
          .offer-card {
            padding: 24px 10vw 18px 10vw;
          }
        }
      `}</style>
      <HeaderM />
      <Navbar />
      <div className="offer-container">
        <div className="offer-title">Current Offers</div>
        <div className="offer-desc">
          Discover our latest tattoo deals and special promotions. Book your session now and take advantage of these limited-time offers!
        </div>
        <div className="offer-list">
          <div className="offer-card">
            <div className="offer-card-title">First Tattoo Discount</div>
            <div className="offer-card-desc">
              Get <b>15% OFF</b> on your very first tattoo with us. Start your ink journey and save!
            </div>
            <div className="offer-card-valid">Valid for new clients only. Show ID at appointment.</div>
          </div>
          <div className="offer-card">
            <div className="offer-card-title">Bring a Friend</div>
            <div className="offer-card-desc">
              Book with a friend and you both get <b>10% OFF</b> your tattoos. Double the ink, double the fun!
            </div>
            <div className="offer-card-valid">Both appointments must be on the same day.</div>
          </div>
          <div className="offer-card">
            <div className="offer-card-title">Flash Day Special</div>
            <div className="offer-card-desc">
              Select from our exclusive flash designs and get a tattoo for just <b>₹999</b>!
            </div>
            <div className="offer-card-valid">Limited slots. Ask for available designs.</div>
          </div>
          <div className="offer-card">
            <div className="offer-card-title">Birthday Bonus</div>
            <div className="offer-card-desc">
              Celebrate your birthday month with <b>20% OFF</b> on any tattoo session.
            </div>
            <div className="offer-card-valid">Show valid ID. Offer valid once per client.</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Offer;