import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <a href="#" className="contacts">Contact me on:</a>
      <a href="https://www.facebook.com">
        <img src="images/facebook-icon.png" alt="Facebook" />
      </a>
      <a href="https://www.linkedin.com">
        <img src="images/Web-Linked-in-Metro-icon.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com">
        <img src="images/github-icon (2).png" alt="GitHub" />
      </a>
    </footer>
  );
};

export default Footer;
