import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/index.css';

export default function Products() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our wide range of premium fitness equipment</p>
        </div>
      </section>
      <ProductList />
    </div>
  );
}