import React from 'react';

import Header from './Header';

import Footer from './Footer';

import '../styles/main.css';

import Main from '../pages/Home';

const App = () => {
  return (
    <div className="app-container">
      <div className="sub-body">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
