import React from 'react';
import { useCart } from '../contexts/CartContext';
import { formatIndianNumber } from '../utils/formatting';
import '../styles/products.css';
import '../styles/quantity-controls.css';

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart, deleteAllOfItem } = useCart();
  
  // Find the item in cart to get its quantity
  const cartItem = cart.items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };
  
  const handleDeleteAll = () => {
    deleteAllOfItem(product);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">₹{formatIndianNumber(product.price)}</p>
        {quantity > 0 ? (
          <div className="quantity-controls">
            <button className="qty-btn minus-btn" onClick={handleRemoveFromCart}>-</button>
            <span className="qty-display">{quantity}</span>
            <button className="qty-btn plus-btn" onClick={handleAddToCart}>+</button>
            <button className="delete-btn" onClick={handleDeleteAll} title="Remove all from cart">🗑️</button>
          </div>
        ) : (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}