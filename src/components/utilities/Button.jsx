import React from 'react';
import PropTypes from 'prop-types';
import { IoTrashBin } from 'react-icons/io5';
import { VscPreview } from 'react-icons/vsc';
import { FaEraser } from 'react-icons/fa';
import { RiFileAddFill } from 'react-icons/ri';

const Button = ({ text, color, onClick }) => (
  <div className="col-md-6">
    <button
      type={text.match('Generate') ? 'submit' : 'button'}
      className={`btn btn-sm btn-${color} w-100`}
      onClick={onClick}
    >
      {text.match('ADD') && <RiFileAddFill />}
      {text.match('DEL') && <IoTrashBin />}
      <span className="mx-2">{text}</span>
      {text.match('Gen') && <VscPreview />}
      {text.match('Res') && <FaEraser />}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
