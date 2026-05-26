import React from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import './Delivery.css';

function Delivery() {
  return (
    <div className="delivery-page">
      <div className="container section">
        {/* Хлебные крошки */}
        <div className="delivery-breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="delivery-breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <span>Доставка и оплата</span>
        </div>

        <h1 className="page-title">Доставка и оплата</h1>

        <div className="delivery-content">
          <div className="delivery-text">
            <p>
              Мы доставляем заказы по городу ежедневно с 10:00 до 21:00.<br></br>
              Вы можете выбрать удобный интервал — за час до приезда<br></br>
              курьер позвонит и предупредит.
            </p>

            
              <strong>Стоимость доставки: 150 ₽</strong>
           

            <p>
              Мы принимаем безопасные способы оплаты, чтобы вы
              не волновались о своих данных.
            </p>

            <p><b>Доступные варианты:</b></p>
            <ul className="delivery-list">
              <li>Банковские карты (Visa, Mastercard, МИР)</li>
              <li>Электронные кошельки (ЮMoney, QIWI)</li>
              <li>Наличные курьеру (при получении)</li>
            </ul>
          </div>

          <div className="delivery-img">
            <img src="/images/delivery-car.png" alt="Доставка" />
          </div>
        </div>
      </div>

      <QuestionForm />
    </div>
  );
}

export default Delivery;