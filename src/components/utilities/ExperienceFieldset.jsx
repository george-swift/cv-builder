/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const ExperienceFieldset = ({ id, item, onChange }) => (
  <>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`Position-${id}`}
        name="position"
        placeholder="position"
        value={item.position}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`Position-${id}`}>Position</label>
    </div>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`Company-${id}`}
        name="company"
        placeholder="company"
        value={item.company}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={`Company-${id}`}>Company Name</label>
    </div>
    <div className="col-md-6 form-floating">
      <input
        type="text"
        className="form-control"
        id={`City-${id}`}
        name="city"
        placeholder="city"
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
