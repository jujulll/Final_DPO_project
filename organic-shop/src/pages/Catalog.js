import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import QuestionForm from '../components/QuestionForm';
import { products, getByCategory, getByIds } from '../data/products';
import './Catalog.css';

function Catalog() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const [activeFilter, setActiveFilter] = useState('fruits');

  const filters = [
    { id: 'fruits', label: 'Фрукты' },
    { id: 'vegetables', label: 'Овощи' },
    { id: 'dairy', label: 'Молочная продукция' },
    { id: 'meat', label: 'Мясо' },
    { id: 'grains', label: 'Крупы' },
    { id: 'tea', label: 'Чай и кофе' },
  ];

  // Новинки: Кукуруза, Груши, Картофель, Спаржа
  const newProducts = getByIds([9, 7, 10, 12]);

  let currentProducts = [];
  let isSearch = false;

  // Если есть поисковый запрос — ищем по всем товарам
  if (searchQuery) {
    isSearch = true;
    const q = searchQuery.toLowerCase();
    currentProducts = products.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  } else {
    // Обычный режим — по категории
    currentProducts = getByCategory(activeFilter);
  }

  return (
    <div>
      <div className="container section">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-back">
            <img src="/images/arrow.svg" alt="Назад" className="breadcrumb-arrow" />
            <span>Главная</span>
          </Link>
          <span>/</span>
          <span>{isSearch ? 'Поиск' : 'Каталог'}</span>
        </div>

        <h1 className="page-title">
          {isSearch ? `Результаты поиска: "${searchQuery}"` : 'Каталог'}
        </h1>

        {/* Фильтры скрываем в режиме поиска */}
        {!isSearch && (
          <>
            <div className="catalog-filters">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <p className="catalog-note">* Все цены указаны за 1 килограмм</p>
          </>
        )}

        {/* Товары или пустой результат */}
        {currentProducts.length > 0 ? (
          <div className="catalog-grid">
            {currentProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <>
            <div className="catalog-empty">
              <h2>{isSearch ? 'Ничего не найдено :(' : 'Товаров нет :('}</h2>
            </div>

            <section className="products-section">
              <div className="container">
                <h2 className="section-title">НАШИ НОВИНКИ</h2>
                <div className="products-grid">
                  {newProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <QuestionForm />
    </div>
  );
}

export default Catalog;