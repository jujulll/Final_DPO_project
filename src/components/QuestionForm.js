import React, { useState } from 'react';
import ModalSuccess from './ModalSuccess';
import './QuestionForm.css';

function QuestionForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    e.target.reset(); // очищаем поля
  };

  return (
    <section className="question-section">
      <div className="container">
        <h2 className="question-title">Остались вопросы?</h2>
        <p className="question-subtitle">
          Напишите нам — и мы поможем выбрать<br />органические продукты.
        </p>

        <form className="question-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Имя и фамилия</label>
            <input type="text" placeholder="Введите имя и фамилию" required />
          </div>

          <div className="form-group">
            <label>Почта</label>
            <input type="email" placeholder="Введите почту" required />
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