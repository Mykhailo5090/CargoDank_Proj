import React, { useState } from 'react';
import '../styles/login.css';
import loginimg from '../assets/images/Login/login-photo.png';
import google from '../assets/images/Login/google.png';
import apple from '../assets/images/Login/apple.png';
import { Link } from 'react-router-dom';

function Login() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue1.trim() === '') {
      setError1('Це поле не може бути порожнім');
    } else {
      setError1('');
    }

    if (inputValue2.trim() === '') {
      setError2('Це поле не може бути порожнім');
    } else {
      setError2('');
    }

    if (inputValue1.trim() !== '' && inputValue2.trim() !== '' && isChecked) {
      console.log('Форма відправлена:', { inputValue1, inputValue2 });
    } else {
      console.log('Будь ласка, заповніть усі поля і погодьтеся з умовами');
    }
  };

  return (
    <div className="login-container">
      <img className="img__login" src={loginimg} alt="login_img" />
      <div className="login__item">
        <p className="login__label">З поверненням! </p>
        <p className="login__sub-label">
          Введіть свої дані для авторизації в вашому акаунті
        </p>
        <div className="input__container__login">
          <p className="p__input__login p__input__login_1">
            Введіть ваш e-mail:
          </p>
          <label>
            <input
              type="text"
              value={inputValue1}
              onChange={handleChange1}
              placeholder={error1 ? error1 : 'example@gmail.com'}
              className={error1 ? 'input-error' : '' || 'input__login'}
            />
          </label>

          <p className="p__input__login p__input__login_1">
            Введіть ваш пароль:
          </p>
          <label>
            <input
              type="text"
              value={inputValue2}
              onChange={handleChange2}
              placeholder={error2 ? error2 : '12345678'}
              className={error2 ? 'input-error' : '' || 'input__login'}
            />
          </label>

          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="login__checkbox"
              />
              Погоджуюсь з умовами
            </label>
          </div>

          <button
            className="button__login button__login_1"
            type="submit"
            onClick={handleSubmit}
          >
            Увійти
          </button>
          <div className="line-container">
            <div className="line"></div>
            <span className="line-text">або</span>
            <div className="line"></div>
          </div>
          <div className="login__goog__apple ">
            <div className="goog__container sign__up__container">
              <img
                className="img__google img__sign__up"
                src={google}
                alt="google"
              />
              <p className="p__sign__up__google p__sign__up">
                Sign Up with Google
              </p>
            </div>
            <div className="apple__container sign__up__container">
              <img
                className="img__apple img__sign__up"
                src={apple}
                alt="apple"
              />
              <p className="p__sign__up__apple p__sign__up">
                Sign Up with Apple
              </p>
            </div>
          </div>
        </div>
        <div className="div__register">
          <p className="p__have__acc">Немаєте створеного акаунта?</p>
          <Link className="link__to__registration" to="/register">
            Перейдіть до реєстрації
          </Link>
          {''}
        </div>
      </div>
    </div>
  );
}

export default Login;
