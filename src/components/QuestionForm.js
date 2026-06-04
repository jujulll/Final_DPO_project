import React, { useState } from 'react';
import ModalSuccess from './ModalSuccess';
import './QuestionForm.css';

function QuestionForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateName = (name) => /^[а-яА-Яa-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => email.includes('@');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(form.name)) {
      newErrors.name = 'Имя должно содержать только буквы';
    }
    if (!validateEmail(form.email)) {
      newErrors.email = 'Email должен содержать @';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      setForm({ name: '', email: '' });
    }
  };

  return (
    <section className="question-section">
      <div className="container">
        <h2 className="question-title">Остались вопросы?</h2>
        <p className="question-subtitle">
          Напишите нам — и мы поможем выбрать<br />органические продукты.
        </p>

        <form className="question-form" onSubmit={handleSubmit}>
          <div className="form-group2">
            <label>Имя и фамилия</label>
            <input 
              type="text" 
              name="name"
              placeholder="Введите имя и фамилию" 
              value={form.name}
              onChange={handleChange}
              required 
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group2">
            <label>Почта</label>
            <input 
              type="email" 
              name="email"
              placeholder="Введите почту" 
              value={form.email}
              onChange={handleChange}
              required 
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <button type="submit" className="question-btn">Отправить</button>
        </form>

        <p className="question-agree">
          Нажимая «Отправить», вы принимаете пользовательское соглашение и политику конфиденциальности
        </p>
      </div>

      <ModalSuccess isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
}

export default QuestionForm;