import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo"><span>Yea</span>lam</a>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#about">About Me</a>
        <a href="#exp">Experience</a>
        <a href="#edu">Education</a>
      </nav>
      <a href="#contact" className="contact">Contact info</a>
    </header>
  );
};

export default Header;
