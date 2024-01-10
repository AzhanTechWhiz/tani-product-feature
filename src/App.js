import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Stocks from './components/Stocks.js';
import Manufacturing from './components/Manufacturing.js';// Import the button component
import Products from './components/Products.js'; // Import the form component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/stocks" element={<Stocks />} />
        <Route exact path="/manufacturing" element={<Manufacturing />} />
        <Route exact path="/add-product" element={<Products />} /> 
        <Route exact path="/Hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
