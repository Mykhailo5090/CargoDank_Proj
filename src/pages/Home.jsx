import React from 'react';
import headercamion from '../assets/images/Header/header-camion.png';
import SprinterItem from '../components/sprinterItem';
import '../styles/main.css';
import sprinter from '../assets/images/Main/main-sprinter.png';
import ducato from '../assets/images/Main/ducato-main.png';
import logo from '../assets/images/Logo/logo.png';

function Main() {
  const sprinterData = [
    {
      id: 1,
      img: sprinter,
      text1: 'Спринтер 1',
      text2: 'Опис спринтера 1',
    },
    {
      id: 2,
      img: sprinter,
      text1: 'Спринтер 2',
      text2: 'Опис спринтера 2',
    },
    {
      id: 3,
      img: sprinter,
      text1: 'Спринтер 2',
      text2: 'Опис спринтера 2',
    },
    {
      id: 4,
      img: sprinter,
      text1: 'Спринтер 2',
      text2: 'Опис спринтера 2',
    },
    {
      id: 5,
      img: sprinter,
      text1: 'Спринтер 2',
      text2: 'Опис спринтера 2',
    },
    {
      id: 6,
      img: sprinter,
      text1: 'Спринтер 2',
      text2:
        'Опис спринтера 2fgkyfkyuwjegfhlyrgiuaygfeilrywghflyjf.hbg.wrb,fghmckggvj,cfyhgvhj,fcgvjh,cfgvjh,cfgwcfbwfvgrhjw,g',
    },
  ];

  return (
    <div className="main">
      <div className="main__item_1 main__item_1">
        <img className="header-camion" src={headercamion} alt="header-camion" />
        <div className="camion-info __wrapper_1">
          <p className="p__camion__info">
            Вантажоперевезення по Україні, СНД та Європі{' '}
            <span className="span_text_camion">від 50 кг до 100 тонн</span>
          </p>
        </div>
      </div>
      <p className="p__sprinters">Вантажні автомобілі:</p>

      <div className="main__item main__item_2 __wrapper">
        <div className="sprinter__item sprinter__item_1">
          {sprinterData.map((sprinter) => (
            <SprinterItem
              key={sprinter.id}
              img={sprinter.img}
              text1={sprinter.text1}
              text2={sprinter.text2}
            />
          ))}
        </div>
      </div>
      <div className="main__item main__item_2">
        <img className="ducatto_img" src={ducato} alt="ducato" />

        <img className="ducatto_logo" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Main;
