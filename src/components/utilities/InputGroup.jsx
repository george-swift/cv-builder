import React from 'react';
import PropTypes from 'prop-types';
import { spaceCamel } from '../../helpers/formHelpers';

const InputGroup = ({
  divClass,
  type,
  id,
  placeholder,
  value,
  onChange,
}) => (
  <div className={divClass}>
    <input
      type={type}
      className="form-control"
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={id}>{spaceCamel(id)}</label>
  </div>
);

InputGroup.propTypes = {
  divClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
