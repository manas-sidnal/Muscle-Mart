import React from "react";
import heroImage from "../assets/hero.jpg";
import '../styles/hero.css';

export default function Hero() {
    return (
        <section className="hero container" style={{
            backgroundImage: `linear-gradient(rgba(40, 40, 40, 0.4), rgba(40, 40, 40, 0.4)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="hero-content">
                <h1>Welcome to Muscle Mart</h1>
                <p>Your one-stop shop for premium fitness equipment.</p>
                <div className="hero-buttons">
                    <button onClick={() => window.location.hash = '#calculator'}>
                        Fitness Calculator
                    </button>
                    <button onClick={() => window.location.hash = '#products'}>
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}
