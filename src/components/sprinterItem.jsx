import React from 'react';
import PropTypes from 'prop-types';

function SprinterItem({ img, text1, text2 }) {
  return (
    <div className="sprinter-item">
      <img className="sprinter-img" src={img} alt={text1} />
      <div className="text-container">
        <h1 className="sprinter-text_1">{text1}</h1>
        <p className="sprinter-text_2">{text2}</p>
      </div>
    </div>
  );
}

SprinterItem.propTypes = {
  img: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default SprinterItem;
