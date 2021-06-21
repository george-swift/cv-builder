import React from 'react';
import PropTypes from 'prop-types';
import { MultipleInputGroup } from './InputGroup';

const ExperienceFieldset = ({ id, item, onChange }) => (
  <>
    <MultipleInputGroup
      id={id}
      name="position"
      item={item}
      onChange={(e) => onChange(e, id)}
    />

    <MultipleInputGroup
      id={id}
      name="company"
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

ExperienceFieldset.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ExperienceFieldset;
