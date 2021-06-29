import React from 'react';
import PropTypes from 'prop-types';
import { spaceCamel, titleCase } from '../../helpers/formHelpers';

const GenerateTemplate = ({ data }) => {
  const { personalInfo } = data;

  return (
    <>
      <h4>Personal Information</h4>
      <hr />
      <div className="row w-100 m-0">
        {
          Object.entries(personalInfo).map(([key, value]) => (
            <div
              key={key}
              className={
                key === 'professionalTitle'
                  ? 'col-12 mb-3'
                  : 'col-md-6 mb-3'
              }
            >
              <h6>
                {spaceCamel(titleCase(key))}
                :
              </h6>
              <p className={value === '' ? 'text-danger' : 'text-dark'}>
                {value !== '' ? value : 'Required'}
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
};

GenerateTemplate.propTypes = {
  data: PropTypes.shape({
    personalInfo: PropTypes.objectOf(PropTypes.string).isRequired,
    education: PropTypes.arrayOf(PropTypes.object).isRequired,
    experience: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default GenerateTemplate;
