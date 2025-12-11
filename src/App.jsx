import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CartPage from "./pages/Cart";
import CalculatorPage from "./pages/Calculator";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'products') {
        setCurrentPage('products');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'cart') {
        setCurrentPage('cart');
      } else if (hash === 'calculator') {
        setCurrentPage('calculator');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <CartPage />;
      case 'calculator':
        return <CalculatorPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
