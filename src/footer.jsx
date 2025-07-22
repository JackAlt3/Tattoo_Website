import React from 'react';
import { Instagram, Mail, Send, Phone, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column" style={{ paddingLeft: '40px' }}>
          <h3 className="footer-title">INKROVERT</h3>
          <p>Artistry in Every Line.</p>
          <p>Near Pachas cold storage, Madodi wadi, Sandor, Vasai-Virar, Maharashtra 401201</p>
        </div>

        <div className="footer-column footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/offer">Offers</Link></li>
            <li><Link to="/booking">Book Appointment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-center">
          <h4>Connect With Us</h4>
          <div className="footer-icons">
            <a href="https://www.instagram.com/_inkrovert_tattooos"><Instagram /></a>
            <a href="#"><Mail /></a>
            <a href="http://api.whatsapp.com/send?phone=7507209441"><FaWhatsapp size={25} /></a>
            <a href="tel:+917507209441"><Phone /></a>
            <a href="https://www.linkedin.com/in/inkrovert-tattoos-577b5732b/"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 INKROVERT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
