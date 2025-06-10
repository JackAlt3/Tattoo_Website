import React from 'react';
import HeaderM from './HeaderMobile.jsx'
import Navbar from './Navbar';
import Footer from './footer.jsx'

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
          font-size: 2.7rem;
          font-weight: bold;
          text-align: center;
          margin-top: 36px;
          margin-bottom: 14px;
          letter-spacing: 1px;
        }
        .book-desc {
          font-family: 'Playfair Display', serif;
          font-size: 1.13rem;
          color: #e6e6e6;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 38px auto;
          line-height: 1.6;
        }
        .book-form-wrapper {
          background: rgba(24,25,26,0.98);
          border-radius: 18px;
          max-width: 900px;
          margin: 0 auto 48px auto;
          padding: 48px 48px 36px 48px;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(255,215,0,0.04);
          border: 1.5px solid #232323;
        }
        .book-form-row {
          display: flex;
          gap: 48px;
          margin-bottom: 48px;
        }
        .book-form-row > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .book-label {
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 4px;
          display: block;
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          letter-spacing: 0.2px;
        }
        .book-input, .book-textarea, .book-select {
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
        .book-input:focus, .book-textarea:focus, .book-select:focus {
          outline: none;
          border: 1.5px solid #FFD700;
          box-shadow: 0 0 0 2px rgba(255,215,0,0.15);
        }
        .book-input::placeholder, .book-textarea::placeholder, .book-select:invalid {
          color: #888;
        }
        .book-textarea {
          min-height: 120px;
          resize: vertical;
          margin-bottom: 0;
        }
        .book-hint {
          font-size: 0.95rem;
          color: #aaa;
          margin-bottom: 12px;
          margin-top: 6px;
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
        @media (max-width: 900px) {
          .book-form-wrapper {
            padding: 24px 6vw 24px 6vw;
          }
          .book-form-row {
            flex-direction: column;
            gap: 0;
            margin-bottom: 32px;
          }
          .book-input, .book-textarea, .book-select {
            margin-bottom: 24px;
          }
          .book-textarea {
            margin-bottom: 0;
          }
        }
        @media (max-width: 600px) {
          .book-form-wrapper {
            padding: 18px 2vw 18px 2vw;
          }
          .book-title {
            font-size: 2rem;
          }
        }
      `}</style>
      <HeaderM />
      <Navbar />
      <div className="book-container">
        <div className="book-title">Book Your Appointment</div>
        <div className="book-desc">
          Begin your tattoo journey with INKROVERT. Securing your appointment is the first step toward your unique piece of art. Fill out the form below with your ideas, preferred dates, and any references. Our team will personally review your request and contact you to discuss the details and confirm your booking.
        </div>
        <div className="book-form-wrapper">
          <div className="book-form-row">
            <div>
              <label className="book-label">Full Name</label>
              <input className="book-input" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label className="book-label">Email Address</label>
              <input className="book-input" type="email" placeholder="your.email@example.com" required />
            </div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Phone Number (Optional)</label>
              <input className="book-input" type="tel" placeholder="Your Phone Number" />
            </div>
          </div>
          <div className="book-form-row">
            <div style={{width: '100%'}}>
              <label className="book-label">Preferred Date</label>
              <input className="book-input" type="date" placeholder="Pick a date" />
            </div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Preferred Time</label>
              <select className="book-select">
                <option value="">Select a time slot</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>
          <div className="book-form-row">
            <div style={{width: '100%'}}>
              <label className="book-label">Tattoo Idea / Description</label>
              <textarea className="book-textarea" placeholder="Describe your tattoo idea, including any references, style, elements, etc." required />
              <div className="book-hint">The more detail, the better we can prepare for your consultation.</div>
            </div>
          </div>
          <div className="book-form-row">
            <div>
              <label className="book-label">Placement (Optional)</label>
              <input className="book-input" type="text" placeholder="e.g., Forearm, Back, Ankle" />
            </div>
            <div>
              <label className="book-label">Approximate Size (Optional)</label>
              <input className="book-input" type="text" placeholder="e.g., 3x3 inches, Palm-sized" />
            </div>
          </div>
          <button className="book-btn" type="button">Request Appointment</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookAppointment;