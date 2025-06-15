import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route,} from "react-router-dom";
import App from './App.jsx'
import Gallery from './gallery2.jsx';
import Contact from './contact.jsx';
import Booking from './booking.jsx';
import Offer from './offer.jsx';
import Appoint from './Appontform.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Appoint />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/booking" element={<Booking/>} />
        </Routes>
      </Router>
  </StrictMode>
)
