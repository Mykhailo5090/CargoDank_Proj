import React, { useState } from 'react';
// import React from 'react';
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
// import 'react-toastify/dist/ReactToastify.css';
import galochka from '../assets/images/Main/galochka.png';

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

  const ducatoData = [
    { id: 1, img: galochka, title: 'Ducato 1', description: 'Опис Ducato 1' },
    { id: 2, img: galochka, title: 'Ducato 2', description: 'Опис Ducato 2' },
    { id: 3, img: galochka, title: 'Ducato 3', description: 'Опис Ducato 3' },
    { id: 4, img: galochka, title: 'Ducato 4', description: 'Опис Ducato 4' },
    { id: 5, img: galochka, title: 'Ducato 5', description: 'Опис Ducato 5' },
    { id: 6, img: galochka, title: 'Ducato 6', description: 'Опис Ducato 6' },
    { id: 7, img: galochka, title: 'Ducato 7', description: 'Опис Ducato 7' },
    { id: 8, img: galochka, title: 'Ducato 8', description: 'Опис Ducato 8' },
    { id: 9, img: galochka, title: 'Ducato 9', description: 'Опис Ducato 9' },
  ];

  // Параметри пагінації
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = 3;

  // Розрахунок початкового та кінцевого індексів для відображення
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedDucatoData = ducatoData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Функції для перемикання сторінок
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };
  const handleButtonClick = () => {
    if (currentPage === 3) {
      goToPreviousPage();
    } else if (currentPage === 1) {
      goToNextPage();
    }
    // Якщо currentPage === 2, то нічого не робить
  };

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

      {/* Ducato Section з пагінацією */}
      <div className="main__item main__item_3">
        <img className="ducatto_img" src={ducato} alt="ducato" />
        <img className="ducatto_logo" src={logo} alt="logo" />
        <div className="pagination-container">
          <p className="label-pagination">Lorem Ipsum</p>
          <ul className="ducato-list">
            {selectedDucatoData.map((item) => (
              <li key={item.id} className="ducato-item">
                <div className="ducato-item__image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="ducato-item__text">
                  <p className="p-pagination">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Пагінація */}
          <div className="pagination">
            <button
              className={`button-pagination ${currentPage === 1 ? 'active' : ''}`}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            ></button>

            {/* Центральна кнопка для відображення активної сторінки */}
            <button
              className={`button-pagination ${currentPage === 2 ? 'active' : ''}`}
              disabled={currentPage === 2}
              onClick={handleButtonClick}
            >
              {currentPage}
            </button>

            <button
              className={`button-pagination ${currentPage === 3 ? 'active' : ''}`}
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            ></button>
          </div>
        </div>
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
            <span className="arrows "> &gt;&gt; </span>

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
            <h1 className="location-title location-h1">title</h1>
            <a className="location-title" href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam recusandae neque fuga, dolor nesciunt animi iusto cumque
              corporis assumenda quisquam illo fugit laboriosam autem magnam
              architecto, laudantium sunt dignissimos?
            </a>
            <span className="arrows "> &gt;&gt; </span>

            <button className="location-title location-button" href="#">
              dfjhg
            </button>
            <div className="location-image">
              <a href="#">
                <img src={gruz} alt="gruzchik" />
              </a>
            </div>
          </li>
          <li className="sub-item__about sub-item__about_3 location-listing">
            <h1 className="location-title location-h1">title</h1>
            <a className="location-title" href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam recusandae neque fuga, dolor nesciunt animi iusto cumque
              corporis assumenda quisquam illo fugit laboriosam autem magnam
              architecto, laudantium sunt dignissimos?
            </a>
            <span className="arrows "> &gt;&gt; </span>

            <button className="location-title location-button" href="#">
              dfjhg
            </button>
            <div className="location-image">
              <a href="#">
                <img src={potomain} alt="port" />
              </a>
            </div>
          </li>
          <li className="sub-item__about sub-item__about_4 location-listing">
            <h1 className="location-title location-h1">title</h1>
            <a className="location-title" href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quibusdam recusandae neque fuga, dolor nesciunt animi iusto cumque
              corporis assumenda quisquam illo fugit laboriosam autem magnam
              architecto, laudantium sunt dignissimos?
            </a>
            <span className="arrows "> &gt;&gt; </span>

            <button className="location-title location-button" href="#">
              dfjhg
            </button>
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
