import React from 'react';
import { v4 } from 'uuid';
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
      <div key={v4()} className="row g-3 mb-4">
        <EducationFieldset
          id={item.id}
          item={item}
          onChange={onChange}
        />
        <Button text="Add" color="secondary" onClick={onAdd} />
        <Button text="Delete" color="warning" onClick={onDelete} />
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
