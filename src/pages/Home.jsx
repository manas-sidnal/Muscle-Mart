import React from 'react';
import Hero from '../components/Hero';
import '../styles/hero.css';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="categories container">
        <h2>Shop By Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <h3>Strength Training</h3>
            <p>Dumbbells, barbells, kettlebells, and weight plates for building muscle and strength.</p>
            <a href="#products" className="category-link">Explore →</a>
          </div>
          <div className="category-item">
            <h3>Cardio Equipment</h3>
            <p>Treadmills, exercise bikes, and more to get your heart pumping and burn calories.</p>
            <a href="#products" className="category-link">Explore →</a>
          </div>
          <div className="category-item">
            <h3>Accessories</h3>
            <p>Essential gym accessories including gloves, resistance bands, and protein shakers.</p>
            <a href="#products" className="category-link">Explore →</a>
          </div>
        </div>
      </section>
      
      <section className="features container">
        <h2>Why Choose Muscle Mart?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🏋️ Premium Quality</h3>
            <p>We source only the highest quality equipment from trusted manufacturers to ensure durability and performance.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Best Prices</h3>
            <p>Competitive pricing without compromising on quality. Get the best value for your investment in health.</p>
          </div>
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery service to get your equipment to you as soon as possible.</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Warranty Protection</h3>
            <p>All our products come with manufacturer warranties for your peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="cta container">
        <h2>Ready to Transform Your Fitness?</h2>
        <p>Browse our extensive collection of fitness equipment and start building your dream home gym today.</p>
        <div className="cta-buttons">
          <a href="#products" className="cta-btn primary">Shop Now</a>
        </div>
      </section>

      <section className="intro container">
        <h2>About Muscle Mart</h2>
        <p>At Muscle Mart, we believe that fitness is a journey, not a destination. Since our founding, we've been dedicated to providing high-quality fitness equipment that empowers individuals to achieve their health and wellness goals.</p>
        <p>Whether you're a seasoned athlete or just beginning your fitness journey, we have everything you need to build your perfect home gym.</p>
      </section>
    </div>
  );
}
