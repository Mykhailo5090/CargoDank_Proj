import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/Logo/logo.png';
import '../styles/AddCargoModal.css';
import logist from '../assets/images/Main/logost-main.png';
import emailjs from 'emailjs-com';

const LogistModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  if (!isOpen) return null;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (name.trim() === '') {
      setErrorName('Це поле не може бути порожнім!');
      isValid = false;
    } else {
      setErrorName('');
    }

    if (email.trim() === '') {
      setErrorEmail('Введіть коректну електронну пошту!');
      isValid = false;
    } else {
      setErrorEmail('');
    }

    if (!isChecked) {
      alert('Будь ласка, погодьтесь з умовами');
      isValid = false;
    }

    if (isValid) {
      emailjs
        .send(
          'service_2mi790y',
          'template_s39yolo',
          { name: name, email: email, message: 'Привіт' },
          's5LE7iiFJysGL5XD2'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.error('FAILED...', err);
          }
        );
      console.log('Form submitted', { name, email });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src={logo} alt="logo" />
          <div className="modal__sub-header">
            <p className="modal__label">Lorem Ipsum</p>
            <p className="modal__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit
              in voluptas earum?
            </p>
          </div>

          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="modal__inputs">
              <label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={errorName ? errorName : 'Введіть ваше імʼя'}
                  className={errorName ? 'input-error' : '' || 'modal__input'}
                />
              </label>
            </div>
            <div className="modal__inputs">
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={errorEmail ? errorEmail : 'example@mail.com'}
                  className={
                    errorEmail
                      ? 'input-error'
                      : '' || 'modal__input modal__input_1'
                  }
                />
              </label>
            </div>
            <div className="checkbox-container">
              <label className="modal__label__1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="modal__checkbox"
                />
                Погоджуюсь
              </label>
            </div>
            <button type="submit" className="modal__submit-button">
              Підтвердити
            </button>
          </form>
          <div className="sub-modal__inputs">
            <img src={logist} alt="logist" />
          </div>
        </div>
      </div>
    </div>
  );
};

LogistModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LogistModal;
