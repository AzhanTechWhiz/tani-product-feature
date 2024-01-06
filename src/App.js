import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Stocks from './components/Stocks.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
