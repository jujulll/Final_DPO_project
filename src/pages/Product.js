import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getById } from '../data/products';
import CartButton from '../components/CartButton';
import QuestionForm from '../components/QuestionForm';
import './Product.css';

function Product() {
  const { id } = useParams();
  const product = getById(id);

  // Если товар не найден
  if (!product) {
    return (
      <div className="container section">
        <div className="product-breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="product-breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <span>Каталог</span>
          <span>/</span>
          <span>Товар не найден</span>
        </div>
        <h1 className="page-title">Товар не найден</h1>
        <Link to="/catalog" className="product-info-btn">← Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container">
        {/* Хлебные крошки */}
        <div className="product-breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="product-breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <Link to="/catalog">Каталог</Link>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        {/* Карточка товара */}
        <div className="product-detail">
          <div className="product-gallery">
            <div className="product-thumbnails">
              {[product.image].map((thumb, index) => (
                <img 
                  key={index} 
                  src={thumb} 
                  alt={`Миниатюра ${index + 1}`}
                  className={index === 0 ? 'active' : ''}
                />
              ))}
            </div>
            <div className="product-main-img">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="product-info-desc">{product.fullDesc || product.description}</p>
            <div className="product-info-price">{product.price} ₽</div>
            <CartButton product={product} />
          </div>
        </div>
      </div>

      <QuestionForm />
    </div>
  );
}

export default Product;