// src/components/Modal.jsx
import React from 'react';

import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}></button>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validates that isOpen is a boolean and required
  onClose: PropTypes.func.isRequired, // Validates that onClose is a function and required
};

export default Modal;
