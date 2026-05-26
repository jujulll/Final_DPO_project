import React, { useState } from 'react';
import './Modal.css';

function ModalAuth({ isOpen, onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'success'
  const [form, setForm] = useState({ name: '', phone: '', password: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Вход: ${form.phone}`);
    onClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name: form.name, phone: form.phone, password: form.password });
    localStorage.setItem('users', JSON.stringify(users));
    setMode('success');
  };

  // УСПЕХ
  if (mode === 'success') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">РЕГИСТРАЦИЯ ЗАВЕРШЕНА!</h2>
          <p className="modal-text">Добро пожаловать в семью осознанных покупателей!</p>
          <p className="modal-text">Рады Вас видеть!</p>
        </div>
      </div>
    );
  }

  // ВХОД
  if (mode === 'login') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">ВОЙДИТЕ В АККАУНТ</h2>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label>Телефон</label>
              <input type="tel" name="phone" placeholder="Введите телефон" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="auth-field">
              <label>Пароль</label>
              <input type="password" name="password" placeholder="Введите пароль" value={form.password} onChange={handleChange} required />
            </div>

            <button type="submit" className="auth-btn">Войти</button>
          </form>

          <p className="auth-note">
            Нажимая «Войти», вы принимаете пользовательское соглашение и политику конфиденциальности
          </p>

          <p className="auth-switch">
            Нет аккаунта? <button className="auth-link" onClick={() => setMode('register')}>Зарегистрироваться</button>
          </p>
        </div>
      </div>
    );
  }

  // РЕГИСТРАЦИЯ
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">СОЗДАЙТЕ АККАУНТ</h2>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="auth-field">
            <label>Имя и фамилия</label>
            <input type="text" name="name" placeholder="Введите имя и фамилию" value={form.name} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <label>Телефон</label>
            <input type="tel" name="phone" placeholder="Введите телефон" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <label>Пароль</label>
            <input type="password" name="password" placeholder="Введите пароль" value={form.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="auth-btn">Зарегистрироваться</button>
        </form>

        <p className="auth-note">
          Нажимая «Зарегистрироваться», вы принимаете пользовательское соглашение и политику конфиденциальности
        </p>

        <p className="auth-switch">
          Уже есть аккаунт? <button className="auth-link" onClick={() => setMode('login')}>Войти</button>
        </p>
      </div>
    </div>
  );
}

export default ModalAuth;