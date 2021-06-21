import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => (
  <div className="col-md-6">
    <button
      type="button"
      className={`btn btn-${color} w-100`}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
