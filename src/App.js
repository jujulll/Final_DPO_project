import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Reviews from './pages/Reviews';
import Delivery from './pages/Delivery';
import About from './pages/About'

function App() {
  return (
    <HashRouter>
    <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;