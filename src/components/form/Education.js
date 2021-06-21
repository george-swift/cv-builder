import React from 'react';
import PropTypes from 'prop-types';
import EducationFieldset from '../utilities/EducationFieldet';
import Button from '../utilities/Button';

const Education = ({
  education,
  onChange,
  onAdd,
  onDelete,
}) => (
  <fieldset className="col-12">
    <legend>Education</legend>
    { education.map((item) => (
      <div key={item.id} className="row g-3 mb-4">
        {EducationFieldset({ id: item.id, item, onChange })}
        <Button text="Add" color="outline-dark" onClick={onAdd} />
        <Button text="Delete" color="warning" onClick={() => onDelete(item.id)} />
      </div>
    ))}
  </fieldset>
);

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      universityName: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Education;
