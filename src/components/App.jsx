import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Transporter from '../pages/Transporter';
import Partner from '../pages/Partner';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="sub-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transporter" element={<Transporter />} />
            <Route path="/partners" element={<Partner />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
