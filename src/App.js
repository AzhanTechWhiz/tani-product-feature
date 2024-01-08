import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Stocks from './components/Stocks.js';
import Manufacture from './components/Manufacture.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/stocks" element={<Stocks />} />
        <Route exact path="/Manufacture" element={<Manufacture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
