import React from 'react';
import PropTypes from 'prop-types';
import { MultipleInputGroup } from './InputGroup';

const EducationFieldset = ({ id, item, onChange }) => (
  <>
    <MultipleInputGroup
      id={id}
      name="university"
      item={item}
      onChange={(e) => onChange(e, id)}
    />

    <MultipleInputGroup
      id={id}
      name="major"
      item={item}
      onChange={(e) => onChange(e, id)}
    />

    <MultipleInputGroup
      id={id}
      name="city"
      item={item}
      onChange={(e) => onChange(e, id)}
    />

    <MultipleInputGroup
      id={id}
      name="from"
      item={item}
      onChange={(e) => onChange(e, id)}
    />

    <MultipleInputGroup
      id={id}
      name="to"
      item={item}
      onChange={(e) => onChange(e, id)}
    />
  </>
);

EducationFieldset.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EducationFieldset;
