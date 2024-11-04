import React from 'react';
import headercamion from '../assets/images/Header/header-camion.png';
import SprinterItem from '../components/sprinterItem';
import '../styles/main.css';
import sprinter from '../assets/images/Main/main-sprinter.png';
import ducato from '../assets/images/Main/ducato-main.png';
import logo from '../assets/images/Logo/logo.png';
import cargo from '../assets/images/Main/vantazhivka.png';
import gruz from '../assets/images/Main/gruzchik-popularnaya-profesiya.png';
import vantazh from '../assets/images/Main/istockphoto-1325350394-612x612.png';
import potomain from '../assets/images/Main/depositphotos_66930937-stock-photo-loading-and-unloading-of-containers.png';

function Main() {
  const sprinterData = [
    { id: 1, img: sprinter, text1: 'Спринтер 1', text2: 'Опис спринтера 1' },
    { id: 2, img: sprinter, text1: 'Спринтер 2', text2: 'Опис спринтера 2' },
    { id: 3, img: sprinter, text1: 'Спринтер 3', text2: 'Опис спринтера 3' },
    { id: 4, img: sprinter, text1: 'Спринтер 4', text2: 'Опис спринтера 4' },
    { id: 5, img: sprinter, text1: 'Спринтер 5', text2: 'Опис спринтера 5' },
    {
      id: 6,
      img: sprinter,
      text1: 'Спринтер 6',
      text2: 'Довгий опис спринтера з додатковими деталями для прикладу...',
    },
  ];

  return (
    <div className="main">
      {/* Header Section */}
      <div className="main__item main__item_1">
        <img className="header-camion" src={headercamion} alt="header-camion" />
        <div className="camion-info __wrapper_1">
          <p className="p__camion__info">
            Вантажоперевезення по Україні, СНД та Європі{' '}
            <span className="span_text_camion">від 50 кг до 100 тонн</span>
          </p>
        </div>
      </div>

      {/* Sprinter Section */}
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

      {/* Ducato Section */}
      <div className="main__item main__item_3 ">
        <img className="ducatto_img" src={ducato} alt="ducato" />
        <img className="ducatto_logo" src={logo} alt="logo" />
      </div>

      {/* About Section */}
      <div className="main__item main__item_4 about__content">
        <ul className="item__about_1">
          <li className="sub-item__about sub-item__about_1 location-listing">
            <h1 className="location-title location-h1">title</h1>
            <a className="location-title" href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam recusandae neque fuga, dolor nesciunt animi iusto cumque
              corporis assumenda quisquam illo fugit laboriosam autem magnam
              architecto, laudantium sunt dignissimos?
            </a>

            <button className="location-title location-button" href="#">
              dfjhg
            </button>
            <div className="location-image">
              <a href="#">
                <img src={vantazh} alt="gruzovik" />
              </a>
            </div>
          </li>

          <li className="sub-item__about sub-item__about_2 location-listing">
            <a className="location-title" href="#">
              WE
            </a>
            <div className="location-image">
              <a href="#">
                <img src={gruz} alt="gruzchik" />
              </a>
            </div>
          </li>
          <li className="sub-item__about sub-item__about_3 location-listing">
            <a className="location-title" href="#">
              Hannah
            </a>
            <div className="location-image">
              <a href="#">
                <img src={potomain} alt="port" />
              </a>
            </div>
          </li>
          <li className="sub-item__about sub-item__about_4 location-listing">
            <a className="location-title" href="#">
              Sarah
            </a>
            <div className="location-image">
              <a href="#">
                <img src={cargo} alt="camion" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
