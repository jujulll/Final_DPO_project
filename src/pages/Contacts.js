import React from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import './Contacts.css';

function Contacts() {
  return (
    <div>
      <div className="container section">
        {/* Хлебные крошки */}
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <span>Контакты</span>
        </div>

        <h1 className="page-title">КОНТАКТЫ</h1>

        <div className="contacts-grid">
          {/* Телефон */}
          <div className="contact-card">
            <h3 className="contact-label">Телефон:</h3>
            <p className="contact-value">+7 (123) 456-78-90</p>
            <p className="contact-note">Звонки принимаем ежедневно с 9:00 до 21:00.</p>
          </div>

          {/* E-mail */}
          <div className="contact-card">
            <h3 className="contact-label">E-mail:</h3>
            <p className="contact-value">shop@organic-store.ru</p>
            <p className="contact-note">Ответим в течение рабочего дня.</p>
          </div>

          {/* Соцсети */}
          <div className="contact-card">
            <h3 className="contact-label">Или свяжитесь с нами в соцсетях:</h3>
            <div className="contact-socials">
              <a href="#" className="social-link">
                <img src="/images/youtube.svg" alt="YouTube" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/twitter.svg" alt="Twitter" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/instagram.svg" alt="Instagram" />
              </a>
            </div>
            <p className="contact-note">Мы отвечаем быстро и публикуем свежие новости.</p>
          </div>

          {/* Картинка */}
          <div className="contact-image">
            <img src="/images/garden.png" alt="Сад" />
          </div>
        </div>
      </div>

      <QuestionForm />
    </div>
  );
}

export default Contacts;