import React, { useState } from 'react';
import '../css/Navbar.css';
import logo from '../media/logo.jpg';


function Navbar({onNav}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li onClick={() => {onNav('home'); toggleMenu();}}>Karta Pića</li>
        <li onClick={() => {onNav('contact'); toggleMenu();}}>Kontakt</li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;