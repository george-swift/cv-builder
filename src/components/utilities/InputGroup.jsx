import React from 'react';
import PropTypes from 'prop-types';
import { spaceCamel, camelCase } from '../../helpers/formHelpers';

const InputGroup = ({
  id,
  placeholder,
  value,
  onChange,
}) => (
  <div className={
    id === 'ProfessionalTitle'
      ? 'col-12 form-floating'
      : 'col-md-6 form-floating'
    }
  >
    <input
      type={id === 'EmailAddress' ? 'email' : 'text'}
      className="form-control"
      name={camelCase(id)}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={id}>{spaceCamel(id)}</label>
  </div>
);

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
