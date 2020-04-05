import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <h1> Paola Berrío's portfolio </h1>
      </div>
      <div className="header-options">
        <Link className="option" to="/">
          About
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        <Link className="option" to="/projects">
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
