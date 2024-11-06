import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCargoModal.css';
import '../styles/main.css';
import logo from '../assets/images/Logo/logo.png';
import axios from 'axios';

const AddCargoModal = ({ isOpen, onClose, onAdd }) => {
  const [cargoDetails, setCargoDetails] = useState({
    description: '',
    origin: '',
    destination: '',
    weight: '',
    price_per_km: '',
    distance: '',
    cargo_type: '',
    deadline: '',
    image: null,
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCargoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      setError('Будь ласка, виберіть файл зображення');
      return;
    }
    if (file && file.size > 5 * 1024 * 1024) {
      setError('Розмір файлу не повинен перевищувати 5MB');
      return;
    }
    setCargoDetails((prevDetails) => ({
      ...prevDetails,
      image: file,
    }));
    setError('');
  };

  const validateForm = () => {
    const {
      description,
      origin,
      destination,
      weight,
      price_per_km,
      distance,
      cargo_type,
      deadline,
    } = cargoDetails;

    if (
      !description ||
      !origin ||
      !destination ||
      !weight ||
      !price_per_km ||
      !distance ||
      !cargo_type ||
      !deadline
    ) {
      return "Будь ласка, заповніть всі обов'язкові поля";
    }

    // Перевірка числових значень
    const numFields = { weight, price_per_km, distance };
    for (const [field, value] of Object.entries(numFields)) {
      if (isNaN(value) || parseFloat(value) <= 0) {
        return `Поле ${field} повинно бути додатнім числом`;
      }
    }

    // Перевірка дати
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
      return 'Некоректний формат дати';
    }
    if (deadlineDate < new Date()) {
      return 'Дата дедлайну не може бути в минулому';
    }

    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');

    try {
      const formData = new FormData();

      // Розрахунок загальної вартості
      const total_price =
        parseFloat(cargoDetails.price_per_km) *
        parseFloat(cargoDetails.distance);

      Object.entries(cargoDetails).forEach(([key, value]) => {
        if (key !== 'image') {
          formData.append(key, value);
        }
      });

      formData.append('total_price', total_price);

      if (cargoDetails.image) {
        formData.append('image', cargoDetails.image);
      }

      const response = await axios.post(
        'http://localhost:5001/api/cargo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Вантаж успішно додано:', response.data);
      onAdd();
      onClose();
    } catch (error) {
      console.error('Помилка при додаванні вантажу:', error);
      setError(
        error.response?.data?.message || 'Помилка при додаванні вантажу'
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <div className="modal-header">
          <img src={logo} alt="logo" />
          <div className="modal__sub-header">
            <p className="modal__label">Додати вантаж</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="add__inputs">
            <div className="add__inputs__item">
              <input
                type="text"
                name="description"
                value={cargoDetails.description}
                onChange={handleInputChange}
                placeholder="Опис"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="text"
                name="origin"
                value={cargoDetails.origin}
                onChange={handleInputChange}
                placeholder="Місце відправлення"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="text"
                name="destination"
                value={cargoDetails.destination}
                onChange={handleInputChange}
                placeholder="Місце призначення"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="number"
                step="0.01"
                min="0"
                name="weight"
                value={cargoDetails.weight}
                onChange={handleInputChange}
                placeholder="Вага (кг)"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="number"
                step="0.01"
                min="0"
                name="price_per_km"
                value={cargoDetails.price_per_km}
                onChange={handleInputChange}
                placeholder="Ціна за км"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="number"
                step="0.01"
                min="0"
                name="distance"
                value={cargoDetails.distance}
                onChange={handleInputChange}
                placeholder="Відстань (км)"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="text"
                name="cargo_type"
                value={cargoDetails.cargo_type}
                onChange={handleInputChange}
                placeholder="Тип вантажу"
                required
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="date"
                name="deadline"
                value={cargoDetails.deadline}
                onChange={handleInputChange}
                placeholder="Дедлайн"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="add__inputs__item">
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="add-button">
            Додати вантаж
          </button>
        </form>
      </div>
    </div>
  );
};

AddCargoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddCargoModal;
