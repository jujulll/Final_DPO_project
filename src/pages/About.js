import React from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import './About.css';

function About() {
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
          <span>О нас</span>
        </div>

        <h1 className="page-title">О НАС</h1>

        <div className="about-content">
          {/* Текст слева, картинка справа */}
          <div className="about-row">
            <div className="about-text">
              <p>Мы появились из простой идеи: вернуть людям доверие к еде. Сегодня на полках супермаркетов сложно найти продукты без «химии», а надписи «эко» и «био» часто оказываются просто маркетинговым ходом. Мы решили это изменить.</p>
              <p>Наш проект — это интернет-магазин сертифицированной органической продукции, где за каждым товаром стоит реальный фермер с прозрачной репутацией. Мы не работаем с посредниками и не берём «что попало». Каждый поставщик проходит проверку: мы изучаем документы, сертификаты, условия выращивания и хранения. Если есть сомнения — продукт не попадает на виртуальную полку.</p>
              <p>Что вы найдёте у нас? Свежие овощи и фрукты без пестицидов и ГМО, молочку от коров, которые не получали гормоны и антибиотики, крупы из чистых полей, мясо от фермеров, практикующих гуманное животноводство.</p>
            </div>
            <div className="about-image">
              <img src="/images/about-sprouts.png" alt="Ростки" />
            </div>
          </div>

          {/* Картинка слева, текст справа */}
          <div className="about-row reverse">
            <div className="about-image">
              <img src="/images/about-vegetables.png" alt="Овощи" />
            </div>
            <div className="about-text">
              <p>Мы не стремимся быть самым большим магазином. Мы хотим быть самым честным. Заходите, выбирайте, пробуйте — и составляйте своё мнение. Будем рады каждому, кто разделяет ценности чистой еды и ответственного потребления.</p>
              <p>С уважением, команда Organic Store</p>
            </div>
          </div>
        </div>
      </div>

      <QuestionForm />
    </div>
  );
}

export default About;