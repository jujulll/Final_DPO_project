import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import QuestionForm from '../components/QuestionForm';
import { getByIds } from '../data/products';
import './Home.css';

function Home() {
  // Новинки — id 9, 7, 10, 12 (кукуруза, груши, картофель, спаржа)
  const newProducts = getByIds([9, 7, 10, 12]);
  
  // Акции — id 25, 26, 27 (гречка, овёс, киноа)
  const saleProducts = getByIds([25, 26, 27]);

  return (
    <div>
      {/* Hero */}
        <section className="hero">
          <div 
            className="hero-bg" 
            style={{ backgroundImage: 'url(/images/hero-vegetables.png)' }}
          ></div>
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">Здоровье начинается с выбора</h1>
              <p className="hero-desc">
                Органические продукты от местных фермеров.<br></br>Без ГМО, пестицидов и гормонов. С доставкой на дом.
              </p>
              <Link to="/catalog">
              <button className="hero-btn">За покупками</button>
            </Link>
            </div>
          </div>
        </section>

      {/* Новинки */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Наши новинки</h2>
          <div className="products-grid">
            {newProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Акции</h2>
          <div className="products-grid three">
            {saleProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="why-section section">
        <div className="container">
          <h2 className="section-title">Почему мы?</h2>
          
          <div className="why-grid">
            {/* Левая колонка */}
            <div className="why-col">
              <p className="why-text-block">
                Выбирая нас, вы получаете сертифицированную органику без посредников — только честные цены и прозрачная цепочка поставок. За каждым продуктом стоит фермер, которого мы знаем лично.
              </p>
              <img className="why-img why-img-large" src="/images/farm.png" alt="Ферма" />
            </div>

            {/* Правая колонка */}
            <div className="why-col">
              <div className="why-spacer"></div>
              <p className="why-text-block">
                Доставляем аккуратно и вовремя, принимаем безопасные платежи и берём возврат на себя, если что-то пошло не так. Это наш стандарт заботы.
              </p>
              <img className="why-img why-img-small" src="/images/microgreens.png" alt="Микрозелень" />
            </div>
          </div>
        </div>
      </section>

      <QuestionForm />
    </div>
  );
}

export default Home;