import React from 'react';
import PropTypes from 'prop-types';
import { spaceCamel, camelCase, titleCase } from '../../helpers/formHelpers';

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
  divClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const MultipleInputGroup = ({
  id,
  name,
  item,
  onChange,
}) => (
  <div className={
    name === 'from' || name === 'to'
      ? 'col-md-3 form-floating'
      : 'col-md-6 form-floating'
    }
  >
    <input
      type="text"
      className="form-control"
      id={`${name}-${id}`}
      name={name}
      placeholder={name}
      value={item[`${name}`]}
      onChange={onChange}
    />
    <label htmlFor={`${name}-${id}`}>
      {titleCase(name)}
    </label>
  </div>
);

MultipleInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export { InputGroup, MultipleInputGroup };
