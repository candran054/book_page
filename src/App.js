import React from 'react'
import Navbar from './Navbar';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/'  />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
