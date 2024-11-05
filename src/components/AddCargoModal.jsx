import React from 'react';
import '../styles/AddCargoModal.css';
import PropTypes from 'prop-types';

const AddCargoModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <div className="modal-header">
          <img
            src="/path/to/logo.png"
            alt="CargoDank Logo"
            className="modal-logo"
          />
          <h2 className="modal-title">lorem ipsum dolor sit amet</h2>
          <p className="modal-description">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="modal-body">
          {/* Поля форми для введення інформації про вантаж */}
          <input
            type="text"
            placeholder="lorem ipsum"
            className="modal-input"
          />
          <input
            type="text"
            placeholder="lorem ipsum"
            className="modal-input"
          />
          <input
            type="text"
            placeholder="lorem ipsum"
            className="modal-input"
          />
          <input
            type="text"
            placeholder="lorem ipsum"
            className="modal-input"
          />
          <textarea placeholder="lorem ipsum" className="modal-textarea" />
          <img
            src="/path/to/sample-image.jpg"
            alt="Sample Cargo"
            className="modal-image"
          />
          <button onClick={onAdd} className="add-button">
            Додати
          </button>
        </div>
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
