import React from 'react';
import PropTypes from 'prop-types';
import { spaceCamel, titleCase } from '../../helpers/formHelpers';

const MultipleInputGroup = ({
  id,
  name,
  item,
  onChange,
}) => (
  <div className={`${name.match('job') ? 'col-12' : 'col-md-6'} form-floating`}>
    <input
      type={
        name === 'start' || name === 'end' ? 'date' : 'text'
      }
      className="form-control"
      id={`${name}-${id}`}
      name={name}
      placeholder={name}
      value={item[`${name}`]}
      onChange={onChange}
    />
    <label htmlFor={`${name}-${id}`}>
      {spaceCamel(
        titleCase(name),
      )}
    </label>
  </div>
);

MultipleInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultipleInputGroup;
