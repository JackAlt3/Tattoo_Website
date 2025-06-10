import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import App from './App.jsx'
import Gallery from './gallery.jsx';
<<<<<<< HEAD
import contact from './contact.jsx';
=======
import Contact from './contact.jsx';
>>>>>>> bdf5f6486c8f7256f7b64a3074482233a114a18b
import Booking from './booking.jsx';
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
          {/* <Route path="/home" element={<HOME />} /> */}
          <Route path="/booking" element={<Booking/>} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </Router>
  </StrictMode>
)
