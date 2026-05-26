import React from 'react';
import './ModalReviewSuccess.css';

function ModalReviewSuccess({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="msg-review-overlay" onClick={onClose}>
      <div className="msg-review-box" onClick={(e) => e.stopPropagation()}>
        <button className="msg-review-close" onClick={onClose}>×</button>
        <h2 className="msg-review-title">ОТЗЫВ ОТПРАВЛЕН!</h2>
        <p className="msg-review-text">Спасибо, что поделились мнением.</p>
        <p className="msg-review-text">Оно появится на сайте после проверки.</p>
      </div>
    </div>
  );
}

export default ModalReviewSuccess;