import React from 'react';
import Cart from '../components/Cart';
import '../styles/index.css';

export default function CartPage() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Your Shopping Cart</h1>
          <p>Review and manage your selected items</p>
        </div>
      </section>
      <div className="container">
        <Cart />
      </div>
    </div>
  );
}