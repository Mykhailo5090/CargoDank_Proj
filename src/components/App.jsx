import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/main.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from '../pages/Home';
import Transporter from '../pages/Transporter';
import Partner from '../pages/Partner';
import Login from '../login/Login';
import Register from '../login/Register';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Render Header only if not on login or register page */}
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Header />
      )}

      <div
        className={`sub-body ${location.pathname === '/login' || location.pathname === '/register' ? 'no-background' : ''}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transporter" element={<Transporter />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* Render Footer only if not on login or register page */}
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Footer />
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
