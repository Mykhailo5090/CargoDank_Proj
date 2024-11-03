import React from 'react';

import '../styles/header.css';

const Header = () => {
  return (
    <header className="header__wrapper __wrapper">
      <div className="header__grid">
        <div className="header-logo">
          <img
            src={require('../assets/images/Logo/logo.png').default}
            alt="logo"
          />
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
                  className="menu__item menu__item_3"
                  href="./certificates.html"
                >
                  {' '}
                  <p className="p">ПЕРЕВІЗНИКУ</p>
                </a>
              </li>
              <li className="li__item li__item_3">
                <a className="menu__item menu__item 4" href="./privacy.html">
                  <p className="p">ПАРТНЕРАМ</p>
                </a>
              </li>
              <li className="li__item li__item_4">
                <a className="menu__item menu__item 4" href="./privacy.html">
                  <img
                    src={
                      require('../assets/images/Header/user-header.png').default
                    }
                    alt="user-profile"
                  />
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
