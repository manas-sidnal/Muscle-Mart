import React from 'react';
import { useCart } from '../contexts/CartContext';
import { formatIndianNumber } from '../utils/formatting';
import '../styles/cart.css';
import '../styles/quantity-controls.css';

export default function Cart() {
  const { cart, addToCart, removeFromCart, deleteAllOfItem } = useCart();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  const handleDeleteAll = (product) => {
    deleteAllOfItem(product);
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-empty">
        <h3>Your cart is empty</h3>
        <p>Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.items.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{formatIndianNumber(item.price)}</p>
            </div>
            <div className="quantity-controls">
              <button 
                className="qty-btn minus-btn" 
                onClick={() => handleRemoveFromCart(item)}
              >
                -
              </button>
              <span className="qty-display">{item.quantity}</span>
              <button 
                className="qty-btn plus-btn" 
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteAll(item)}
                title="Delete item"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {cart.totalItems}</p>
        <p>Total Price: ₹{formatIndianNumber(cart.totalPrice)}</p>
      </div>
    </div>
  );
}