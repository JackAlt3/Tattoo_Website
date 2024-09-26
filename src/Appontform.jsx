import React, { useState } from 'react';
import { X, ChevronDown, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

// Styles moved outside the component
const formStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  position: 'relative',
};

const inputStyle = {
  display: 'block',
  width: '95%',
  marginBottom: '15px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'underline',
  marginRight: '15px',
  display: 'inline-flex',
  alignItems: 'center',
};

// Main Component
const Appoint = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
    };

    console.log('Sending email with the following parameters:', templateParams);

    emailjs.send('service_pvzy664', 'template_xnnx0rr', templateParams, '4bUkcK0263TBtIsVb')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Appointment booked successfully!');
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        alert('There was an error booking your appointment. Please try again.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Call sendEmail function to send the email via EmailJS
    sendEmail();

    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });
  };

  return (
    <div style={formStyle}>
      <a href="/"><X
        aria-label="Close"
        style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer' }}
      /></a>
      <h2 style={{ marginTop: 0, marginBottom: '20px', textAlign: 'center', fontSize: '24px' }}>
        Let's Connect
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />

        <div style={{ display: 'flex', marginBottom: '15px', gap: '10px' }}>
          <div style={{ position: 'relative', width: '50%' }}>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleInputChange}
              style={{ ...inputStyle, marginBottom: 0 , paddingLeft:"2px" }}
              required
            />
          </div>
          <div style={{ position: 'relative', width: '50%' }}>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              style={{ ...inputStyle, marginBottom: 0, appearance: 'none', paddingRight: '30px' }}
              required
            >
              <option value="">Choose a time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
            </select>
            <ChevronDown
              aria-label="Select Time"
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
              size={20}
            />
          </div>
        </div>

        <button type="submit" style={buttonStyle}>
          Book Appointment
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="tel:" style={linkStyle}>
          <Phone size={16} style={{ marginRight: '5px' }} />
          Call Now
        </a>
        <a href="https://wa.me/" style={{ ...linkStyle, color: 'green' }}>
          <MessageSquare size={16} style={{ marginRight: '5px' }} />
          WhatsApp Now
        </a>
      </div>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <a href="#" style={{ ...linkStyle, color: 'black' }}>Locate Nearest Studio</a>
      </div>

      <div
        style={{
          marginTop: '15px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CheckCircle size={16} style={{ marginRight: '5px', color: 'green' }} />
        Your data is safe with us
      </div>
    </div>
  );
};

export default Appoint;
