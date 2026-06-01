import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import './ProductCard.css';

function ProductCard({ id, image, title, description, price }) {
  return (
    <div className="product-card animate__animated animate__fadeInUp">
      <Link to={`/product/${id}`} className="product-card-link">
        <div className="product-image-wrapper">
          <img src={image} alt={title} />
        </div>
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-price">{price} ₽</div>
      </Link>
      <CartButton product={{ id, image, title, description, price }} />
    </div>
  );
}

export default ProductCard;