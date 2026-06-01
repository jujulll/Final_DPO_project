import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link to="/" className="footer-logo">
          <img src="/images/logo.svg" alt="Organic" />
        </Link>

        <nav className="footer-nav">
          <Link to="/catalog">Каталог</Link>
          <Link to="/delivery">Доставка и оплата</Link>
          <Link to="/about">О нас</Link>
          <Link to="/reviews">Отзывы</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        <div className="footer-socials">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/images/youtube.svg" alt="YouTube" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;