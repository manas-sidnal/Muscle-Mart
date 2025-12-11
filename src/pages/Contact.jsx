import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/index.css';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? Get in touch with our team</p>
        </div>
      </section>
      <ContactForm />
      <section className="contact-info container">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Fitness Street<br />Health City, HC 12345</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@muscle-mart.com</p>
          </div>
          <div className="contact-item">
            <h3>Hours</h3>
            <p>Monday-Friday: 9am-8pm<br />Saturday: 10am-6pm<br />Sunday: Closed</p>
          </div>
        </div>
      </section>
    </div>
  );
}