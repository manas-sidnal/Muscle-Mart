import React from 'react';
import { useCart } from '../contexts/CartContext';
import logo from '../assets/logo.png';

export default function Header() {
  const { cart } = useCart();
  
  return (
    <>
      <style>
        {`
          .site-header {
            background: var(--text);
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
            box-shadow: 0 2px 10px var(--card-shadow);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .site-header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .site-header nav a {
            margin-left: 1.5rem;
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;
            transition: var(--transition);
            color: var(--bg);
            white-space: nowrap;
          }

          .site-header nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--bg);
            transition: var(--transition);
          }

          .site-header nav a:hover::after {
            width: 100%;
          }
          
          .site-header nav a:hover{
          color: var(--accent);
          text-decoration: none;
          }
        `}
      </style>
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
    </>
  );
}
