import React from 'react';
import PropTypes from 'prop-types';
import ExperienceFieldset from '../utilities/ExperienceFieldset';
import Button from '../utilities/Button';

const Experience = ({
  experience,
  onChange,
  onAdd,
  onDelete,
}) => (
  <fieldset className="col-12">
    <legend>Experience</legend>
    {experience.map((item) => (
      <div key={item.id} className="row g-3 mb-4">
        {ExperienceFieldset({ id: item.id, item, onChange })}
        <Button text="Add" color="outline-dark" onClick={onAdd} />
        <Button text="Delete" color="warning" onClick={() => onDelete(item.id)} />
      </div>
    ))}
  </fieldset>
);

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Experience;
