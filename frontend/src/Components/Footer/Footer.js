import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <img
            src="https://via.placeholder.com/250x80" // Replace with the logo URL
            alt="Arul Anandar College"
            className="footer-logo"
          />
          <p>Karumathur - 625514</p>
          <p>Madurai District</p>
          <p>Tamil Nadu, INDIA</p>
          <p>principal@aactni.edu.in</p>
          <p>arulanandarcollege@gmail.com</p>
          <iframe
            title="college-location"
            src="https://maps.google.com/maps?q=Arul%20Anandar%20College&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="footer-map"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='#'>MKU</Link></li>
            <li><Link to="#">UGC</Link></li>
            <li><Link to="#">NAAC</Link></li>
            <li><Link to="#">Swayam</Link></li>
            <li><Link to="#">NPTEL</Link></li>
            <li><Link to ="#">National Library</Link></li>
            <li><Link to="#">Scholarship Portal</Link></li>
            <li><Link to="#">Equivalence of Degrees</Link></li>
          </ul>
        </div>

        {/* Our Campus */}
        <div className="footer-section">
          <h3>Our Campus</h3>
          <ul>
            <li>Department</li>
            <li>Sports & Games</li>
            <li>Library</li>
            <li>Part-V</li>
            <li>Extension</li>
            <li>Hostel</li>
            <li>Alumni</li>
            <li>Infrastructures</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>OFFICE: 78457 41893 / 78452 15901</p>
          <p>PRINCIPAL: 94436 98960</p>
          <p>CONTROLLER OF EXAMINATIONS: 9442363332</p>
          <p>FOR ADMISSION ENQUIRY:</p>
          <p>9384190524</p>
          <p>9442128397</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;