import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../styles/login.css';
import loginimg from '../assets/images/Login/login-photo.png';
import google from '../assets/images/Login/google.png';
import apple from '../assets/images/Login/apple.png';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    if (email.trim() === '') {
      setErrorEmail('Це поле не може бути порожнім!');
      isValid = false;
    } else {
      setErrorEmail('');
    }

    if (password.trim() === '') {
      setErrorPassword('Це поле не може бути порожнім!');
      isValid = false;
    } else {
      setErrorPassword('');
    }

    if (!isChecked) {
      alert('Будь ласка, погодьтеся з умовами');
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post(
          'http://localhost:5001/login',
          {
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          // Save the token in localStorage upon successful login
          localStorage.setItem('authToken', response.data.token);
          console.log('Успішний вхід:', response.data);

          // Redirect to homepage
          navigate('/'); // Use navigate to go to the homepage
        } else {
          console.log('Помилка входу:', response.data.message);
        }
      } catch (error) {
        console.error('Помилка сервера:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <img className="img__login" src={loginimg} alt="login_img" />
      <div className="login__item">
        <p className="login__label">З поверненням!</p>
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
              value={email}
              onChange={handleEmailChange}
              placeholder={errorEmail ? errorEmail : 'example@gmail.com'}
              className={errorEmail ? 'input-error' : '' || 'input__login'}
            />
          </label>

          <p className="p__input__login p__input__login_1">
            Введіть ваш пароль:
          </p>
          <label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder={errorPassword ? errorPassword : '12345678'}
              className={errorPassword ? 'input-error' : '' || 'input__login'}
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
          <div className="login__goog__apple">
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
        </div>
      </div>
    </div>
  );
}

export default Login;
