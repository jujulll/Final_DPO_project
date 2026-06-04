import React, { useState } from 'react';
import './Modal.css';

function ModalAuth({ isOpen, onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'success'
  const [form, setForm] = useState({ name: '', phone: '', password: '', email: '' });
  const [errors, setErrors] = useState({}); 

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };


  const validateName = (name) => /^[а-яА-Яa-zA-Z\s]+$/.test(name);
  const validatePhone = (phone) => /^(\+7|8)\d{10}$/.test(phone);
  const validateEmail = (email) => email.includes('@');

  const validateLogin = () => {
    const newErrors = {};
    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Введите телефон в формате +7********** или 8**********';
    }
    if (form.password.length < 1) {
      newErrors.password = 'Введите пароль';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!validateName(form.name)) {
      newErrors.name = 'Имя должно содержать только буквы';
    }
    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Введите телефон в формате +7********** или 8**********';
    }
    if (!validateEmail(form.email)) {
      newErrors.email = 'Email должен содержать @';
    }
    if (form.password.length < 6) {
      newErrors.password = 'Пароль минимум 6 символов';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateLogin()) return; 
    alert(`Вход: ${form.phone}`);
    onClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateRegister()) return; 
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name: form.name, phone: form.phone, password: form.password });
    localStorage.setItem('users', JSON.stringify(users));
    setMode('success');
  };


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


  if (mode === 'login') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">ВОЙДИТЕ В АККАУНТ</h2>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label>Телефон</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Введите телефон" 
                value={form.phone} 
                onChange={handleChange} 
                required 
              />
              {errors.phone && <span className="auth-error">{errors.phone}</span>} {/* ← добавлено */}
            </div>
            <div className="auth-field">
              <label>Пароль</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Введите пароль" 
                value={form.password} 
                onChange={handleChange} 
                required 
              />
              {errors.password && <span className="auth-error">{errors.password}</span>} {/* ← добавлено */}
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">СОЗДАЙТЕ АККАУНТ</h2>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="auth-field">
            <label>Имя и фамилия</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Введите имя и фамилию" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
            {errors.name && <span className="auth-error">{errors.name}</span>} {/* ← добавлено */}
          </div>
          <div className="auth-field">
            <label>Телефон</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Введите телефон" 
              value={form.phone} 
              onChange={handleChange} 
              required 
            />
            {errors.phone && <span className="auth-error">{errors.phone}</span>} {/* ← добавлено */}
          </div>
          <div className="auth-field">
            <label>Email</label> {/* ← добавлено: поле email */}
            <input 
              type="email" 
              name="email" 
              placeholder="Введите email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
            {errors.email && <span className="auth-error">{errors.email}</span>} {/* ← добавлено */}
          </div>
          <div className="auth-field">
            <label>Пароль</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Введите пароль" 
              value={form.password} 
              onChange={handleChange} 
              required 
            />
            {errors.password && <span className="auth-error">{errors.password}</span>} {/* ← добавлено */}
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