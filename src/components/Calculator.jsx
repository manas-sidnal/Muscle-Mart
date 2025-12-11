import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/calculator.css';

export default function Calculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [activity, setActivity] = useState('');
    const [bmi, setBmi] = useState(null);
    const [calories, setCalories] = useState(null);
    const { cart } = useCart();

    const calculateBMI = () => {
        if (weight && height) {
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        setBmi(bmiValue);
        }
    };

    const calculateCalories = () => {
        if (weight && height && age && gender && activity) {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'female') {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9
        };

        const caloriesValue = (bmr * activityMultipliers[activity]).toFixed(0);
        setCalories(caloriesValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateBMI();
        calculateCalories();
    };

    const handleReset = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setGender('');
        setActivity('');
        setBmi(null);
        setCalories(null);
    };

    // Calculate suggested spending based on calories
    const getSuggestedSpending = () => {
        if (!calories) return 0;
        // Assuming ₹100 per 1000 calories as a rough estimate
        return Math.round((calories / 1000) * 100);
    };

    return (
        <section className="calculator container">
        <h2>Fitness Calculator</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>

            <div className="form-group">
            <label htmlFor="activity">Activity Level:</label>
            <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                required
            >
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                <option value="active">Active (exercise 6-7 days/week)</option>
                <option value="veryActive">Very Active (hard exercise daily)</option>
            </select>
            </div>

            <div className="button-group">
            <button type="submit">Calculate</button>
            <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </form>

        {(bmi || calories) && (
            <div className="result">
            <h3>Your Results</h3>
            {bmi && (
                <>
                <p>BMI: {bmi}</p>
                <p className={bmi < 18.5 ? 'underweight' : bmi < 25 ? 'normal' : bmi < 30 ? 'overweight' : 'obese'}>
                    {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese'}
                </p>
                </>
            )}
            {calories && (
                <>
                <p>Daily Calorie Needs: {calories} calories</p>
                </>
            )}
            </div>
        )}
        </section>
    );
}