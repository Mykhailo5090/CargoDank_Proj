import React, { useState } from 'react';
import '../styles/footer.css';
import logo from '../assets/images/Logo/logo.png';
import facebook from '../assets/images/Main/facebook.png';
import whatsup from '../assets/images/Main/whatsup.png';
import viber from '../assets/images/Main/viber.png';
import insta from '../assets/images/Main/insta.png';
import telega from '../assets/images/Main/telega.png';
import logist from '../assets/images/Main/logost-main.png';
import LogistModal from '../components/logistModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

              <button className="button__footer__info" onClick={openModal}>
                Lorem
              </button>
            </div>
            <div className="sub-sub__footer__container__item_2">
              <img
                className="img__footer__facebook"
                src={facebook}
                alt="facebook"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/_dankanych_7?igsh=dTN1bWRqd2M0NGYw&utm_source=qr',
                    '_blank'
                  )
                }
              />
              <img
                className="img__footer__whatsup"
                src={whatsup}
                alt="whatsup"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/_dankanych_7?igsh=dTN1bWRqd2M0NGYw&utm_source=qr',
                    '_blank'
                  )
                }
              />
              <img
                className="img__footer__viber"
                src={viber}
                alt="viber"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/_dankanych_7?igsh=dTN1bWRqd2M0NGYw&utm_source=qr',
                    '_blank'
                  )
                }
              />
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
                <img
                  src={insta}
                  alt="insta"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/_dankanych_7?igsh=dTN1bWRqd2M0NGYw&utm_source=qr',
                      '_blank'
                    )
                  }
                />
                <img
                  src={telega}
                  alt="telega"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/_dankanych_7?igsh=dTN1bWRqd2M0NGYw&utm_source=qr',
                      '_blank'
                    )
                  }
                />
              </div>
            </div>
            <div className="sub-sub__2__footer__item_2">
              <img className="img__footer__logist" src={logist} alt="logist" />
            </div>
          </div>
        </div>
      </div>

      <LogistModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;
