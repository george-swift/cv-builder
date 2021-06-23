import React from 'react';
import PropTypes from 'prop-types';
import EducationFieldset from '../utilities/EducationFieldset';
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
      <div key={item.id} className="row g-3 mb-5">
        {EducationFieldset({ id: item.id, item, onChange })}
        <Button text="Add Section" color="outline-teal" onClick={onAdd} />
        {education.length > 1 && <Button text="Delete" color="warning" onClick={() => onDelete(item.id)} />}
      </div>
    ))}
  </fieldset>
);

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Education;
