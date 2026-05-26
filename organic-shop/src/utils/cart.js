const CART_KEY = 'organic_cart';

// Получить корзину из памяти
export function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Сохранить и сообщить всем страницам, что корзина изменилась
function save(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}

// Добавить товар (или увеличить количество)
export function addToCart(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  save(cart);
}

// Удалить товар
export function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  save(cart);
}

// Изменить количество
export function updateQty(productId, qty) {
  let cart = getCart();
  if (qty < 1) {
    cart = cart.filter(i => i.id !== productId);
  } else {
    const item = cart.find(i => i.id === productId);
    if (item) item.qty = qty;
  }
  save(cart);
}

// Общее число товаров (для badge на иконке)
export function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

// Очистить корзину
export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event('cartUpdated'));
}