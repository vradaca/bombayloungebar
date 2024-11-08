// ContactPage.js
import React from 'react';
import '../css/Kontakt.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Kontaktirajte nas</h1>

      <div className="contact-content">
        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            title="bar-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.652203072376!2d21.19143238478612!3d44.23481844006703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47512b0063f7007f%3A0x65aa27b2e425c04d!2sBombay%20Lounge%20Bar!5e0!3m2!1sen!2srs!4v1731104980421!5m2!1sen!2srs"
            width="100%"
            height="575"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info and Form */}
        <div className="contact-details">
          <div className="contact-info">
            <h2><strong>Broj telefona: <br/></strong> +381 62 9786405</h2>
            <h2><strong>Mejl adresa: <br/></strong> bombayloungebar@gmail.com</h2>
          </div>

          <div className="contact-form">
            <h2>Povežimo se</h2>
            <form>
              <label htmlFor="name">Ime:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="phone">Broj telefona:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="email">Mejl adresa:</label>
              <input type="email" id="email" name="email" required />

              <button type="submit">Pošalji</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
