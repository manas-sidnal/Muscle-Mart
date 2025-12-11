import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/index.css';

export default function CalculatorPage() {
    return (
        <div>
            <section className="page-header">
                <div className="container">
                <h1>Fitness Calculator</h1>
                <p>Calculate your BMI and daily calorie needs</p>
                </div>
            </section>
            <div className="container">
                <Calculator />
            </div>
        </div>
    );
}