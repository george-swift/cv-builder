/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const EducationFieldset = ({ id, item, onChange }) => (
  <>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`Institution-${id}`}
        name="universityName"
        placeholder="Name of institution"
        value={item.universityName}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`Institution-${id}`}>University</label>
    </div>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`Degree-${id}`}
        name="major"
        placeholder="Major"
        value={item.major}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`Company-${id}`}>Degree</label>
    </div>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`City-${id}`}
        name="city"
        placeholder="Location"
        value={item.city}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`City-${id}`}>City</label>
    </div>
    <div className="col-md-3 form-floating">
      <input
        type="text"
        className="form-control"
        id={`From-${id}`}
        name="from"
        placeholder="YYYY"
        value={item.from}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`From-${id}`}>From</label>
    </div>
    <div className="col-md-3 form-floating">
      <input
        type="text"
        className="form-control"
        id={`To-${id}`}
        name="to"
        placeholder="YYYY"
        value={item.to}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`To-${id}`}>To</label>
    </div>
  </>
);

EducationFieldset.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    universityName: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EducationFieldset;
