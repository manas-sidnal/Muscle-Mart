import React from 'react';
import Hero from '../components/Hero';
import '../styles/hero.css';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="intro container">
        <h2>Welcome to Muscle Mart</h2>
        <p>Your one-stop shop for premium fitness equipment.</p>
        <p>Browse our extensive collection of fitness equipment on the <a href="#products">Products page</a>.</p>
      </section>
    </div>
  );
}
