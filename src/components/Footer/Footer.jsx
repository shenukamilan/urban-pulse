import React from 'react';
import './Footer.css';

const Footer = () => {
  // Automatically update the year so you don't have to change it manually
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {currentYear} Urban Pulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;