import React from 'react';
import PropTypes from 'prop-types';
import { IoAdd, IoCloseCircleOutline } from 'react-icons/io5';

import { smartIcon } from '../../helpers/formHelpers';

const Button = ({ text, color, onClick }) => (
  <div className="col-md-6">
    <button
      type="button"
      className={`btn btn-sm btn-${color} w-100`}
      onClick={onClick}
    >
      {smartIcon(
        text,
        <IoAdd />,
        <IoCloseCircleOutline />,
      )}
      <span className="ms-2">{text}</span>
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
