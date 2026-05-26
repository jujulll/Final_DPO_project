import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { getCart, updateQty, removeFromCart, clearCart } from '../utils/cart';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [delivery, setDelivery] = useState('courier');
  const [payment, setPayment] = useState('sbp');
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '' });

  // Загружаем корзину при открытии страницы
  useEffect(() => {
    refreshCart();
    window.addEventListener('cartUpdated', refreshCart);
    return () => window.removeEventListener('cartUpdated', refreshCart);
  }, []);

  function refreshCart() {
    const cart = getCart();
    const items = cart.map(c => {
      const product = products.find(p => p.id === c.id);
      return product ? { ...product, qty: c.qty } : null;
    }).filter(Boolean);
    setCartItems(items);
  }

  const handleQty = (id, delta) => {
    const item = cartItems.find(i => i.id === id);
    if (item) updateQty(id, item.qty + delta);
  };

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const deliveryCost = cartItems.length > 0 ? 150 : 0;
  const total = subtotal + deliveryCost;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заказ оформлен! Спасибо за покупку.');
    clearCart();
    setCartItems([]);
  };

  // Пустая корзина
  if (cartItems.length === 0) {
    return (
      <div className="container section cart-empty">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="breadcrumb-arrow" />
            <span>Главная</span>
            </Link>
            <span>/</span>
          <span>Корзина</span>
        </div>
        <h1 className="page-title">Корзина</h1>
        <p className="empty-text">Ваша корзина пуста</p>
        <Link to="/catalog" className="empty-btn">Перейти в каталог</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      {/* Хлебные крошки */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="breadcrumb-arrow" />
            <span>Главная</span>
            </Link>
            <span>/</span>
        <span>Корзина</span>
      </div>

      <h1 className="page-title">КОРЗИНА</h1>

      <div className="cart-layout">
        {/* Список товаров */}
        <div className="cart-list">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">{item.price} ₽</p>
              </div>
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => handleQty(item.id, -1)}><img src="/images/minus2.svg" alt="−" /></button>
                <span className="qty-value">{item.qty}</span>
                <button className="qty-btn" onClick={() => handleQty(item.id, 1)}><img src="/images/plus2.svg" alt="+" /></button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}><img src="/images/delete.svg" alt="+" /></button>
            </div>
          ))}
        </div>

        {/* Блок итого */}
        <div className="cart-summary">
          <div className="summary-total">
            <span>ИТОГО:</span>
            <span>{total} ₽</span>
          </div>
          <div className="summary-row">
            <span>Товары</span>
            <span className="dotted"></span>
            <span>{subtotal} ₽</span>
          </div>
          <div className="summary-row">
            <span>Доставка</span>
            <span className="dotted"></span>
            <span>{deliveryCost} ₽</span>
          </div>
        </div>
      </div>

      {/* Доставка и оплата */}
      <form onSubmit={handleSubmit} className="checkout-section">
        <div className="checkout-col">
          <h2 className="section-title">ДОСТАВКА</h2>

          <div className="form-group">
            <label>Имя и фамилия</label>
            <input type="text" name="name" className="form-input" placeholder="Введите имя и фамилию" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Телефон</label>
            <input type="tel" name="phone" className="form-input" placeholder="Введите телефон" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Почта</label>
            <input type="email" name="email" className="form-input" placeholder="Введите почту" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Город получения</label>
            <input type="text" name="city" className="form-input" placeholder="Введите город получения" value={form.city} onChange={handleChange} required />
          </div>

          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="delivery" value="courier" checked={delivery === 'courier'} onChange={() => setDelivery('courier')} />
              Курьер
            </label>
            <label className="radio-label">
              <input type="radio" name="delivery" value="pickup" checked={delivery === 'pickup'} onChange={() => setDelivery('pickup')} />
              В пункт выдачи
            </label>
            <label className="radio-label">
              <input type="radio" name="delivery" value="post" checked={delivery === 'post'} onChange={() => setDelivery('post')} />
              Почта России
            </label>
          </div>
        </div>

        <div className="checkout-col">
          <h2 className="section-title">ОПЛАТА</h2>

          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="payment" value="sbp" checked={payment === 'sbp'} onChange={() => setPayment('sbp')} />
              СБП
            </label>
            <label className="radio-label">
              <input type="radio" name="payment" value="card" checked={payment === 'card'} onChange={() => setPayment('card')} />
              Картой при получении
            </label>
          </div>

          <button type="submit" className="checkout-btn">Оформить заказ</button>
        </div>
      </form>
    </div>
  );
}

export default Cart;