import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';
import ModalReviewSuccess from '../components/ModalReviewSuccess';
import './Reviews.css';

function Reviews() {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const allReviews = [
    {
      id: 1,
      name: 'Роберт',
      city: 'Москва, Россия',
      avatar: '/images/human1.png',
      rating: '5.0',
      text: 'Заказываю здесь фрукты и овощи уже полгода — всегда свежие, сочные и именно такие, как на фото. Отдельное спасибо за карточки с историей фермера, теперь я точно знаю, что покупаю.'
    },
    {
      id: 2,
      name: 'Марина',
      city: 'Екатеринбург, Россия',
      avatar: '/images/human2.png',
      rating: '5.0',
      text: 'У ребёнка аллергия на красители и консерванты. Только здесь нашли продукты, которые подходят — и главное, без обмана. Составы чистые. Спасибо за вашу работу!'
    },
    {
      id: 3,
      name: 'Алексей',
      city: 'Санкт-Петербург, Россия',
      avatar: '/images/human1.png',
      rating: '4.5',
      text: 'Доставка всегда вовремя, курьеры вежливые. Продукты качественные, но хотелось бы больше выбора зимних фруктов. В целом очень доволен!'
    },
    {
      id: 4,
      name: 'Ольга',
      city: 'Новосибирск, Россия',
      avatar: '/images/human2.png',
      rating: '5.0',
      text: 'Наконец-то нашла настоящие органические продукты! Всё свежее, вкусное, упаковка экологичная. Рекомендую всем друзьям и родственникам.'
    },
    {
      id: 5,
      name: 'Дмитрий',
      city: 'Казань, Россия',
      avatar: '/images/human1.png',
      rating: '4.0',
      text: 'Хороший магазин, приятные цены за такое качество. Иногда бывают задержки с доставкой, но всегда предупреждают заранее. Буду заказывать ещё.'
    },
    {
      id: 6,
      name: 'Елена',
      city: 'Сочи, Россия',
      avatar: '/images/human2.png',
      rating: '5.0',
      text: 'Живу в Сочи, а продукты приезжают свежими как будто только с грядки! Особенно люблю их зелень и микрозелень. Отдельное спасибо за рецепты в коробке!'
    }
  ];

  const reviewsPerPage = 2;
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  const currentReviews = allReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setReviewText('');
    setRating(3);
  };

  return (
    <div className="reviews-page">
      <div className="container section">
        {/* Хлебные крошки */}
        <div className="reviews-breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="reviews-breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <span>Отзывы</span>
        </div>

        <h1 className="page-title">Отзывы</h1>

        {/* Слайдер отзывов */}
        <div className="reviews-slider">
          <div className="reviews-list">
            {currentReviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div className="review-info">
                    <div className="review-name">{review.name}</div>
                    <div className="review-city">{review.city}</div>
                  </div>
                  <div className="review-rating">{review.rating}</div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="reviews-nav">
            <div className="reviews-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`reviews-dot ${currentPage === index ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                ></button>
              ))}
            </div>
            <div className="reviews-arrows">
              <button
                className="reviews-arrow"
                onClick={handlePrev}
                disabled={currentPage === 0}
              >
                <img src="/images/arrow-left.svg" alt="Назад" />
              </button>
              <button
                className="reviews-arrow"
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
              >
                <img src="/images/arrow-right.svg" alt="Вперёд" />
              </button>
            </div>
          </div>
        </div>

        {/* Форма отзыва */}
        <div className="review-form-section">
          <div className="review-form-left">
            <h2 className="review-form-title">Оставь свой отзыв!</h2>
            
            <div className="review-stars">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  className={`review-star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                >
                  <img 
                    src={star <= rating ? '/images/star-filled.svg' : '/images/star-empty.svg'} 
                    alt={star <= rating ? 'Заполненная звезда' : 'Пустая звезда'}
                  />
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <textarea
                className="review-textarea"
                placeholder="Оставьте свой отзыв"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
              <button type="submit" className="review-submit-btn">Отправить</button>
            </form>
          </div>

          <div className="review-form-right">
            <img src="/images/cow.png" alt="Корова" />
          </div>
        </div>
      </div>

      <QuestionForm />

      <ModalReviewSuccess isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

export default Reviews;