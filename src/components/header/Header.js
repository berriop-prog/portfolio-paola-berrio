import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <h1> Paola Berrío portafolio </h1>
      </div>
      <div className="header-options">
        <Link className="option" to="/">
          Acerca
        </Link>
        <Link className="option" to="/contact">
          Contacto
        </Link>
        <Link className="option" to="/">
          Proyectos
        </Link>
      </div>
    </header>
  );
};

export default Header;
