import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link className="menu__item menu__item_1" to="/">
                  <p className="p">ГОЛОВНА</p>
                </Link>
              </li>
              <li className="li__item li__item_2">
                <Link className="menu__item menu__item_2" to="/transporter">
                  <p className="p">ПЕРЕВІЗНИКУ</p>
                </Link>
              </li>
              <li className="li__item li__item_3">
                <Link className="menu__item menu__item_3" to="/partners">
                  <p className="p">ПАРТНЕРАМ</p>
                </Link>
              </li>
              <li className="li__item li__item_4">
                <Link className="menu__item menu__item_4" to="/login">
                  <img className="p" src={userprofile} alt="user-profile" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
