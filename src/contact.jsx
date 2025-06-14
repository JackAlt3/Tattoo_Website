import React from 'react';
import HeaderM from './HeaderMobile.jsx';
import Navbar from './Navbar';
import Footer from './footer.jsx';

function Contact() {
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
        .contact-container {
          min-height: 100vh;
          background: #111;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          padding-bottom: 80px;
        }
        .neon-text-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px 0 0 0;
          min-height: 120px;
        }
        .neon-text {
          font-family: 'Moontime', cursive;
          font-size: 4.5rem;
          color: #fff9c4;
          text-shadow:
            0 0 5px #fff176,
            0 0 10px #ffeb3b,
            0 0 20px #fdd835,
            0 0 40px #fdd835,
            0 0 80px #fdd835;
          line-height: 1;
          max-width: 700px;
        }
        .contact-desc {
          font-family:'Inter','Arial',Sans-serif;
          font-size: 1.13rem;
          color: #ffffff;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 24px auto;
          line-height: 1.6;
        }
        .contact-main-grid {
          display: flex;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto 48px auto;
          align-items: flex-start;
        }
        .contact-form-wrapper {
          background: rgba(24,25,26,0.98);
          border-radius: 18px;
          flex: 1.2;
          padding: 48px 48px 36px 48px;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(255,215,0,0.04);
          border: 1.5px solid #232323;
          min-width: 320px;
        }
        .contact-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 32px;
        }
        .contact-form-row {
          display: flex;
          gap: 32px;
          margin-bottom: 48px;
        }
        .contact-form-row > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-label {
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 4px;
          display: block;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          letter-spacing: 0.2px;
        }
        .contact-input, .contact-textarea {
          width: 100%;
          padding: 16px 16px;
          border-radius: 8px;
          border: 1.5px solid #232323;
          background: #18191a;
          color: #fff;
          font-size: 1.08rem;
          margin-bottom: 16px;
          font-family: 'Inter', Arial, sans-serif;
          transition: border 0.2s, box-shadow 0.2s;
          box-shadow: 0 1.5px 8px 0 rgba(255,215,0,0.03);
        }
        .contact-input:focus, .contact-textarea:focus {
          outline: none;
          border: 1.5px solid #FFD700;
          box-shadow: 0 0 0 2px rgba(255,215,0,0.15);
        }
        .contact-input::placeholder, .contact-textarea::placeholder {
          color: #888;
        }
        .contact-textarea {
          min-height: 120px;
          resize: vertical;
          margin-bottom: 0;
        }
        .book-btn {
          background: linear-gradient(90deg, #FFD700 0%, #ffea70 100%);
          color: #fff !important;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          padding: 18px 0;
          font-size: 1.15rem;
          margin-top: 24px;
          width: 100%;
          box-shadow: 0 2px 12px 0 rgba(255,215,0,0.10);
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          text-align: center;
        }
        .book-btn:hover {
          background: linear-gradient(90deg, #ffe066 0%, #FFD700 100%);
          color: #fff;
          box-shadow: 0 4px 24px 0 rgba(255,215,0,0.18);
        }
        .contact-side {
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .contact-info, .contact-location {
          background: rgba(24,25,26,0.98);
          border-radius: 18px;
          padding: 32px 28px 28px 28px;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          border: 1.5px solid #232323;
        }
        .contact-location {
          padding: 32px 28px 48px 28px;
          animation: goldenGlow 2s ease-in-out infinite;
        }
        @keyframes goldenGlow {
          0%, 100% {
            border-color: #232323;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          }
          50% {
            border-color: #FFD700;
            box-shadow: 0 8px 32px 0 rgba(255,215,0,0.3);
          }
        }
        .contact-info-title, .contact-location-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: bold;
          margin-bottom: 18px;
          color: #fff;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.05rem;
          color: #ffffff;
        }
        .contact-info-item i {
          color: #fff;
          font-size: 1.18rem;
        }
        .contact-location-map {
          width: 100%;
          height: 300px;
          border-radius: 10px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffaaaa;
          font-size: 1rem;
          text-align: center;
        }
        @media (max-width: 1100px) {
          .contact-main-grid {
            flex-direction: column;
            gap: 36px;
            max-width: 98vw;
            padding: 0 12px;
          }
        }
        @media (max-width: 700px) {
          .contact-form-wrapper, .contact-info, .contact-location {
            padding: 18px 8vw;
          }
          .contact-location {
            padding: 18px 8vw 36px 8vw;
          }
          .neon-text {
            font-size: 2.5rem;
          }
          .contact-location-map {
            height: 240px;
          }
        }
      `}</style>
      <HeaderM />
      <Navbar />
      <div className="contact-container">
        <div className="neon-text-container">
          <div className="neon-text">Get In Touch</div>
        </div>
        <div className="contact-desc">
          Connect with INKROVERT. Whether you have questions about the process, want to discuss a specific design, or are ready to embark on your next tattoo adventure, we're eager to hear from you. Use the form below, or reach out via our contact details. Let's talk ink.
        </div>
        <div className="contact-main-grid">
          <div className="contact-form-wrapper">
            <div className="contact-form-title">Send Us a Message</div>
            <div className="contact-form-row">
              <div>
                <label className="contact-label">Full Name</label>
                <input className="contact-input" type="text" placeholder="Your Name" required />
              </div>
            </div>
            <div className="contact-form-row">
              <div>
                <label className="contact-label">Email Address</label>
                <input className="contact-input" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            <div className="contact-form-row">
              <div>
                <label className="contact-label">Message</label>
                <textarea className="contact-textarea" placeholder="Your message, questions, or ideas..." required />
              </div>
            </div>
            <button className="book-btn" type="button">Send Message</button>
          </div>
          <div className="contact-side">
            <div className="contact-info">
              <div className="contact-info-title">Contact Information</div>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <i className="fa fa-map-marker"></i>
                  123 Tattoo Street, Art City, AC 12345
                </div>
                <div className="contact-info-item">
                  <i className="fa fa-envelope"></i>
                  contact@inkrovert.com
                </div>
                <div className="contact-info-item">
                  <i className="fa fa-phone"></i>
                  (123) 456-7890
                </div>
              </div>
            </div>
            <div className="contact-location">
              <div className="contact-location-title">Our Studio Location</div>
              <div className="contact-location-map">
                Google Maps API Key is missing. Please set <br />
                <b>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</b> in your environment variables.
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </div>
    </>
  );
}

export default Contact;
