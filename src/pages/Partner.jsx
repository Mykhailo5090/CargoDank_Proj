import React from 'react';
import '../styles/partner.css';
import '../styles/main.css';
import headercamion from '../assets/images/Header/header-camion.png';
import first from '../assets/images/partners/first.png';
import second from '../assets/images/partners/second.png';
import third from '../assets/images/partners/third.png';
import fourth from '../assets/images/partners/fourth.png';

const Partner = () => {
  return (
    <div className="div__container__partner">
      <div className="main__item main__item_1">
        <img className="header-camion" src={headercamion} alt="header-camion" />
        <div className="camion-info __wrapper_1">
          <p className="p__camion__info">
            Вантажоперевезення по Україні, СНД та Європі{' '}
            <span className="span_text_camion">від 50 кг до 100 тонн</span>
          </p>
        </div>
      </div>
      <div className="div__partner__item_1 __wrapper__partner">
        <p className="p__partner__label">Lorem Ipsum dolor sit amet </p>
        <div className="sub-div__partner__item_1">
          <div className="item__sub-div_1 item__sub-div">
            <img src={first} alt="first" />
            <p className="p__sub-div__label p__sub-div__label_1">Lorem ipsum</p>
            <p className="p__text__sub-div p__text__sub-div_1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              similique veritatis, earum odio fuga odit delectus repellendus
              labore maiores architecto quo molestiae quasi voluptatem et.
              Excepturi nam numquam ipsum quam? Facere autem blanditiis saepe
              labore maiores architecto quo molestiae quasi voluptatem et.
            </p>
          </div>
          <div className="item__sub-div_2 item__sub-div">
            <p className="p__text__sub-div p__text__sub-div_2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              similique veritatis, earum odio fuga odit delectus repellendus
              labore maiores architecto quo molestiae quasi voluptatem et.
              Excepturi nam numquam ipsum quam? Facere autem blanditiis saepe
              labore maiores architecto quo molestiae quasi voluptatem et.
            </p>
            <p className="p__sub-div__label p__sub-div__label_2">Lorem ipsum</p>
            <img src={second} alt="second" />
          </div>
          <div className="item__sub-div_3 item__sub-div">
            <img src={third} alt="third" />
            <p className="p__sub-div__label p__sub-div__label_3">Lorem ipsum</p>
            <p className="p__text__sub-div p__text__sub-div_3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              similique veritatis, earum odio fuga odit delectus repellendus
              labore maiores architecto quo molestiae quasi voluptatem et.
              Excepturi nam numquam ipsum quam? Facere autem blanditiis saepe
              labore maiores architecto quo molestiae quasi voluptatem et.
            </p>
          </div>
          <div className="item__sub-div_4 item__sub-div">
            <p className="p__text__sub-div p__text__sub-div_4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              similique veritatis, earum odio fuga odit delectus repellendus
              labore maiores architecto quo molestiae quasi voluptatem et.
              Excepturi nam numquam ipsum quam? Facere autem blanditiis saepe
              labore maiores architecto quo molestiae quasi voluptatem et.
            </p>
            <p className="p__sub-div__label p__sub-div__label_4">Lorem ipsum</p>
            <img src={fourth} alt="fourth" />
          </div>
        </div>
      </div>
      <div className="div__partner__item_2"></div>
      <div className="div__partner__item_3"></div>
    </div>
  );
};

export default Partner;
