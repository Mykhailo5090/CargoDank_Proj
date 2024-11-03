import React from 'react';

import Header from './Header';

import Footer from './Footer';

import '../styles/main.css';

import Main from '../pages/Home';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
