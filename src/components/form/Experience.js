import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../utilities/Fieldset';
import Button from '../utilities/Button';

const Experience = ({
  experience,
  onChange,
  onAdd,
  onDelete,
}) => (
  <fieldset className="col-12">
    {
      experience.length < 1 && (
        <>
          <legend>Experience</legend>
          <Button text="ADD NEW EXPERIENCE" color="outline-teal" onClick={onAdd} />
        </>
      )
    }
    {experience.map((item, i) => (
      <React.Fragment key={item.id}>
        <legend>
          {experience.length > 1 ? `Experience #${i + 1}` : 'Experience'}
        </legend>
        <div className="row g-3 mb-5">
          {
            Fieldset({
              section: 'experience',
              id: item.id,
              item,
              onChange,
            })
          }
          <Button text="ADD NEW EXPERIENCE" color="outline-teal" onClick={onAdd} />
          <Button text="DELETE EXPERIENCE" color="warning" onClick={() => onDelete(item.id)} />
        </div>
      </React.Fragment>
    ))}
  </fieldset>
);

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Experience;
