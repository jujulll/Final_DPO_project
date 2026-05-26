import React, { useState, useEffect } from 'react';
import { addToCart, getCart, updateQty, removeFromCart } from '../utils/cart';
import './CartButton.css';

function CartButton({ product }) {
  const [qty, setQty] = useState(0);

  // Синхронизация с корзиной при загрузке и при любых изменениях
  useEffect(() => {
    const sync = () => {
      const cart = getCart();
      const item = cart.find(i => i.id === product.id);
      setQty(item ? item.qty : 0);
    };
    sync();
    window.addEventListener('cartUpdated', sync);
    return () => window.removeEventListener('cartUpdated', sync);
  }, [product.id]);

  if (qty === 0) {
    return (
      <button className="cart-btn" onClick={() => addToCart(product.id)}>
        В корзину
      </button>
    );
  }

  return (
    <div className="cart-counter">
      <button onClick={() => qty <= 1 ? removeFromCart(product.id) : updateQty(product.id, qty - 1)}>
        <img src="/images/minus.svg" alt="−" />
      </button>
      <span>{qty}</span>
      <button onClick={() => updateQty(product.id, qty + 1)}>
        <img src="/images/plus.svg" alt="+" />
      </button>
    </div>
  );
}

export default CartButton;