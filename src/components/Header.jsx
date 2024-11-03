import React from 'react';

import '../styles/header.css';

import logo from '../assets/images/Logo/logo.png';

import userprofile from '../assets/images/Header/user-header.png';

const Header = () => {
  return (
    <header className="header__wrapper __wrapper">
      <div className="header__grid">
        <div className="header-logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li className="li__item li__item_1">
                <a className="menu__item menu__item_1" href="./index.html">
                  <p className="p">ГОЛОВНА</p>
                </a>
              </li>
              <li className="li__item li__item_2">
                <a
                  className="menu__item menu__item_2"
                  href="./certificates.html"
                >
                  {' '}
                  <p className="p">ПЕРЕВІЗНИКУ</p>
                </a>
              </li>
              <li className="li__item li__item_3">
                <a className="menu__item menu__item_3" href="./privacy.html">
                  <p className="p">ПАРТНЕРАМ</p>
                </a>
              </li>
              <li className="li__item li__item_4">
                <a className="menu__item menu__item_4" href="./privacy.html">
                  <img className="p" src={userprofile} alt="user-profile" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
