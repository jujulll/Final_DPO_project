import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartCount } from '../utils/cart';
import Modal from './Modal';
import './Header.css';

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [cartCount, setCartCount] = useState(getCartCount());
  const [authOpen, setAuthOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const update = () => setCartCount(getCartCount());
    window.addEventListener('cartUpdated', update);
    window.addEventListener('focus', update);
    return () => {
      window.removeEventListener('cartUpdated', update);
      window.removeEventListener('focus', update);
    };
  }, []);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) setSearchText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const query = searchText.trim();
      if (query) {
        navigate(`/catalog?search=${encodeURIComponent(query)}`);
        setSearchOpen(false);
        setSearchText('');
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-left">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="Organic" className="logo-img" />
            </Link>

            <nav className="nav">
              <Link to="/catalog">Каталог</Link>
              <Link to="/delivery">Доставка и оплата</Link>
              <Link to="/about">О нас</Link>
              <Link to="/reviews">Отзывы</Link>
              <Link to="/">Контакты</Link>
            </nav>
          </div>

          <div className="header-icons">
            <button className="icon-btn" onClick={() => setAuthOpen(true)}>
              <img src="/images/user.svg" alt="Профиль" />
            </button>

            <div className={`search-box ${searchOpen ? 'open' : ''}`}>
              <input
                type="text"
                className="search-input"
                placeholder="Поиск..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="icon-btn" onClick={toggleSearch}>
                <img src="/images/search.svg" alt="Поиск" />
              </button>
            </div>

            <Link to="/cart" className="icon-btn cart-icon">
              <img src="/images/cart.svg" alt="Корзина" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      <Modal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}

export default Header;