import React from 'react';
import './Footer.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaUserSecret, FaSitemap, FaQuestionCircle, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer-area modern-footer">
    <div className="footer-content">
      <div className="footer-section logo-social">
        <a href="/" className="logo-text-footer">Foody<span>Reserv</span></a>
        <div className="footer-baseline">La meilleure livraison de repas à Dakar</div>
        <div className="footer-social">
          <a href="https://www.facebook.com/DakarFoodDelivery" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/dakarfooddelivery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-section links">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/"><FaHome /> Accueil</a></li>
          <li><a href="/about"><FaInfoCircle /> À propos</a></li>
          <li><a href="/contact"><FaEnvelope /> Contactez-Nous</a></li>
        </ul>
      </div>
      <div className="footer-section links">
        <h3>Informations</h3>
        <ul>
          <li><a href="/privacy-policy"><FaUserSecret /> Politique de confidentialité</a></li>
          <li><a href="/sitemap"><FaSitemap /> Plan du site</a></li>
          <li><a href="/faqs"><FaQuestionCircle /> FAQs</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>DROITS D'AUTEUR&copy; 2025 TOUS LES DROITS SONT RÉSERVÉS. <span>FoodyReserv</span></p>
    </div>
  </footer>
);

export default Footer; 