import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../utilities/Fieldset';
import Button from '../utilities/Button';

const Education = ({
  education,
  onChange,
  onAdd,
  onDelete,
}) => (
  <fieldset className="col-12">
    {
      education.length < 1 && (
        <>
          <legend>Education</legend>
          <Button text="ADD NEW EDUCATION" color="outline-teal" onClick={onAdd} />
        </>
      )
    }
    { education.map((item, i) => (
      <React.Fragment key={item.id}>
        <legend>
          {education.length > 1 ? `Education #${i + 1}` : 'Education'}
        </legend>
        <div className="row g-3 mb-5">
          {
            Fieldset({
              section: 'education',
              id: item.id,
              item,
              onChange,
            })
          }
          <Button text="ADD NEW EDUCATION" color="outline-teal" onClick={onAdd} />
          <Button text="DELETE EDUCATION" color="warning" onClick={() => onDelete(item.id)} />
        </div>
      </React.Fragment>
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
