import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from '../utilities/InputGroup';
import data from '../../data/fields.json';
import { camelCase, spaceCamel } from '../../helpers/stringWrangler';

const PersonalInformation = ({ userInfo, onChange }) => {
  const { fields } = data;

  return (
    <fieldset className="col-12">
      <legend>Personal Information</legend>
      <div className="row g-3 mb-4">
        {
          fields.personalInfo.map((field) => (
            <InputGroup
              key={field}
              id={field}
              placeholder={spaceCamel(field)}
              value={userInfo[camelCase(field)]}
              onChange={(e) => onChange(e)}
            />
          ))
        }
      </div>
    </fieldset>
  );
};

PersonalInformation.propTypes = {
  userInfo: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PersonalInformation;
