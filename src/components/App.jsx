import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Transporter from '../pages/Transporter';
import Partner from '../pages/Partner';
import Login from '../login/Login';
import Register from '../login/Register';
import Modal from '../components/modalAcc';
import '../styles/main.css';

const AppContent = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const shouldRenderHeaderFooter =
    location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div className="app-container">
      {/* Pass toggleModal to Header */}
      {shouldRenderHeaderFooter && <Header onMenuClick={toggleModal} />}

      <div
        className={`sub-body ${
          location.pathname === '/login' || location.pathname === '/register'
            ? 'no-background'
            : ''
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transporter" element={<Transporter />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {shouldRenderHeaderFooter && <Footer />}

      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
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
