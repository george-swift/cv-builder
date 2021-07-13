import React from 'react';
import PropTypes from 'prop-types';
import MultipleInputGroup from './MultipleInputGroup';
import data from '../../data/fields.json';

const Fieldset = ({
  section,
  id,
  item,
  onChange,
}) => {
  const { fields } = data;

  return (
    <>
      {
        fields[section].map((field) => (
          <MultipleInputGroup
            key={field}
            id={id}
            name={field}
            item={item}
            onChange={(e) => onChange(e, id)}
          />
        ))
      }
    </>
  );
};

Fieldset.propTypes = {
  section: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Fieldset;
