import React from 'react';

import headercamion from '../assets/images/Header/header-camion.png';

import '../styles/main.css';

function Main() {
  return (
    <div className="main">
      <div className="main__item main__item_1">
        <img className="header-camion" src={headercamion} alt="header-camion" />
        <div className="camion-info __wrapper_1">
          <p className="p__camion__info">
            Вантажоперевезення по Україні, СНД та Європі{' '}
            <span className="span_text_camion">від 50 кг до 100 тонн</span>
          </p>
        </div>
      </div>

      <div className="main__item main__item_2 __wrapper">
        <p className="p__sprinters">Вантажні автомобілі:</p>
        <div className="container__sprinters">
          <div className="sprinters__item sprinters__item_1"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
