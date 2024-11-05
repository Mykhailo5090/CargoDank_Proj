import React from 'react';
import '../styles/footer.css';
import logo from '../assets/images/Logo/logo.png';
import facebook from '../assets/images/Main/facebook.png';
import whatsup from '../assets/images/Main/whatsup.png';
import viber from '../assets/images/Main/viber.png';
import insta from '../assets/images/Main/insta.png';
import telega from '../assets/images/Main/telega.png';
import logist from '../assets/images/Main/logost-main.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container ">
        <div className="footer__container__item_1 footer__wrapper">
          <img className="img__logo__footer" src={logo} alt="logo" />
          <p className="p__produced__footer">
            powered by{' '}
            <span className="span__footer__powered">Dankanych Mykhailo</span>
          </p>
        </div>
        <div className="footer__container__item_2">
          <div className="sub-footer__container__item_1 footer__wrapper">
            <div className="sub-sub__footer__container__item_1">
              <p className="p__footer__info__bald">Lorem Ipsum</p>
              <button className="button__footer__info">Lorem</button>
            </div>
            <div className="sub-sub__footer__container__item_2">
              <img
                className="img__footer__facebook"
                src={facebook}
                alt="facebook"
              />
              <img
                className="img__footer__whatsup"
                src={whatsup}
                alt="whatsup"
              />
              <img className="img__footer__viber" src={viber} alt="viber" />
            </div>
          </div>
          <div className="sub-footer__container__item_2">
            <div className="sub-sub__2__footer__item_1 footer__wrapper">
              <div className="sub__div__footer__item_1">
                <p className="p__sub__div__label">Lorem ipsum</p>
                <p className="p__sub__div__footel__info">Lorem ipsum</p>
                <p className="p__sub__div__footel__info">Lorem ipsum</p>
                <p className="p__sub__div__footel__info">Lorem ipsum</p>
              </div>
              <div className="sub__div__footer__item_2">
                <img src={insta} alt="insta" />
                <img src={telega} alt="telega" />
              </div>
            </div>
            <div className="sub-sub__2__footer__item_2">
              <img className="img__footer__logist" src={logist} alt="logist" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
