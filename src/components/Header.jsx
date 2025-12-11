import React from 'react';
import { useCart } from '../contexts/CartContext';
import logo from '../assets/logo.png';
import '../styles/header.css';

export default function Header() {
  const { cart } = useCart();
  
  return (
    <header className="site-header">
      <div className="container">
        <a href="#home" className="logo-container">
          <img src={logo} alt="Muscle Mart Logo" className="logo-image" />
          <span className="logo-text">Muscle Mart</span>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart" className="cart-link">
            Cart {cart.totalItems > 0 && <span className="cart-count">({cart.totalItems})</span>}
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
