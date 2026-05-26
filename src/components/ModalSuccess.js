import React from 'react';
import './ModalSuccess.css';

function ModalSuccess({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="msg-overlay" onClick={onClose}>
      <div className="msg-box" onClick={(e) => e.stopPropagation()}>
        <button className="msg-close" onClick={onClose}>×</button>
        <h2 className="msg-title">СКОРО БУДЕМ НА СВЯЗИ!</h2>
        <p className="msg-text">Ваша почта получена.</p>
        <p className="msg-text">Оператор свяжется с вами в течение часа.</p>
      </div>
    </div>
  );
}

export default ModalSuccess;