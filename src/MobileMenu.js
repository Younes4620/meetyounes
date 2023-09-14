// MobileMenu.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav${isOpen ? '-active' : ''}`}>
      <ul className="nav-links">
      <div className={`burger-menu-mobile${isOpen ? '-active' : ''}`} onClick={toggleMenu}></div> 
        <li>
          <Link to="/meetyounes" onClick={toggleMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={toggleMenu}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;