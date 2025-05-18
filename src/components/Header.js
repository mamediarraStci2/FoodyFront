import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <a href="/" className="logo-text">Foody<span>Reserv</span></a>
      <nav className="nav-links">
        <a href="/">Accueil</a>
        <a href="/restaurants">Commander !</a>
        <a href="/about">À propos</a>
        <a href="/contact">Contactez-Nous</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Se connecter</button>
      </div>
    </div>
  </header>
);

export default Header; 