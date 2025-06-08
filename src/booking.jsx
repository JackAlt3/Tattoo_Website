import React from 'react';
import Navbar from './Navbar';

function BookAppointment() {
  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        body {
          background: #111;
        }
        .book-container {
          min-height: 100vh;
          background: #111;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          padding-bottom: 80px;
        }
        .book-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-top: 32px;
          margin-bottom: 12px;
        }
        .book-desc {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #e6e6e6;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 36px auto;
          line-height: 1.5;
        }
        .book-form-wrapper {
          background: #18191a;
          border-radius: 8px;
          max-width: 600px;
          margin: 0 auto 40px auto;
          padding: 32px 28px 24px 28px;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.15);
        }
        .book-form-row {
          display: flex;
          gap: 18px;
          margin-bottom: 18px;
        }
        .book-form-row > div {
          flex: 1;
        }
        .book-label {
          font-size: 0.98rem;
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
        }
        .book-input, .book-textarea, .book-select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 4px;
          border: none;
          background: #222;
          color: #fff;
          font-size: 1rem;
          margin-bottom: 4px;
          font-family: 'Inter', Arial, sans-serif;
        }
        .book-input:focus, .book-textarea:focus, .book-select:focus {
          outline: 2px solid #FFD700;
        }
        .book-textarea {
          min-height: 70px;
          resize: vertical;
        }
        .book-hint {
          font-size: 0.85rem;
          color: #aaa;
          margin-bottom: 10px;
        }
        .book-btn {
          background: #e6e6e6;
          color: #181818;
          font-weight: 600;
          border: none;
          border-radius: 4px;
          padding: 12px 24px;
          font-size: 1rem;
          margin-top: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .book-btn:hover {
          background: #FFD700;
          color: #181818;
        }
        /* Footer styles */
        .footer {
          background: #151515;
          color: #e6e6e6;
          padding: 32px 0 18px 0;
          display: flex;
          justify-content: center;
          border-top: 1px solid #222;
        }
        .footer-inner {
          width: 100%;
          max-width: 1100px;
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }
        .footer-col {
          flex: 1;
          min-width: 180px;
        }
        .footer-title {
          font-family: 'Playfair Display', serif;
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #fff;
        }
        .footer-brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 4px;
        }
        .footer-link {
          color: #e6e6e6;
          text-decoration: none;
          display: block;
          margin-bottom: 6px;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #FFD700;
        }
        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .footer-social a {
          color: #e6e6e6;
          font-size: 1.2rem;
          transition: color 0.2s;
        }
        .footer-social a:hover {
          color: #FFD700;
        }
        @media (max-width: 900px) {
          .footer-inner {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }
          .book-form-wrapper {
            padding: 18px 6vw 18px 6vw;
          }
        }
      `}</style>
      <Navbar />
      <div className="book-container">
        <div className="book-title">Book Your Appointment</div>
        <div className="book-desc">
          Begin your tattoo journey with INKROVERT. Securing your appointment is the first step toward your unique piece of art. Fill out the form below with your ideas, preferred dates, and any references. Our team will personally review your request and contact you to discuss the details and confirm your booking.
        </div>
        <form className="book-form-wrapper">
          <div className="book-form-row">
            <div>
              <label className="book-label">Full Name</label>
              <input className="book-input" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label className="book-label">Email Address</label>
              <input className="book-input" type="email" placeholder="you@email.com" required />
            </div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Phone Number (Optional)</label>
              <input className="book-input" type="tel" placeholder="Your Phone Number" />
            </div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Preferred Date</label>
              <input className="book-input" type="date" />
            </div>
            <div>
              <label className="book-label">Preferred Time</label>
              <select className="book-select">
                <option>Select a time slot</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
          <div>
            <label className="book-label">Tattoo Idea / Description</label>
            <textarea className="book-textarea" placeholder="Describe your tattoo idea, including any references, style, elements, etc." required />
            <div className="book-hint">The more detail, the better we can prepare for your consultation.</div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Placement (Optional)</label>
              <input className="book-input" type="text" placeholder="e.g., Forearm, Back, Ankle" />
            </div>
            <div>
              <label className="book-label">Approximate Size (Optional)</label>
              <input className="book-input" type="text" placeholder="e.g., 2x3 inches, Palm-sized" />
            </div>
          </div>
          <button className="book-btn" type="submit">Request Appointment</button>
        </form>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col">
              <div className="footer-brand">INKROVERT</div>
              <div>Artistry in Every Line.<br />142 Tattoo Street, Art City, AC 1348</div>
            </div>
            <div className="footer-col">
              <div className="footer-title">Quick Links</div>
              <a className="footer-link" href="/gallery">Gallery</a>
              <a className="footer-link" href="/offer">Offers</a>
              <a className="footer-link" href="/booking">Book Appointment</a>
              <a className="footer-link" href="/contact">Contact Us</a>
            </div>
            <div className="footer-col">
              <div className="footer-title">Connect With Us</div>
              <div className="footer-social">
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </footer>
        {/* Font Awesome CDN for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </div>
    </>
  );
}

export default BookAppointment;