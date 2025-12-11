import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import '../styles/products.css';

export default function ProductList() {
  return (
    <section className="product-list container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}