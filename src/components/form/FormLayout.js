import React from 'react';
import PropTypes from 'prop-types';
import PersonalInformation from './Personal';
import Education from './Education';
import Experience from './Experience';
import Button from '../utilities/Button';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPreview,
  onReset,
}) => (
  <form className="row g-3 px-4">
    <PersonalInformation
      userInfo={cv.personalInfo}
      onChange={onChangePersonal}
    />
    <hr />
    <Experience
      experience={cv.experience}
      onChange={onChangeExperience}
      onAdd={onAddExperience}
      onDelete={onDeleteExperience}
    />
    <hr />
    <Education
      education={cv.education}
      onChange={onChangeEducation}
      onAdd={onAddEducation}
      onDelete={onDeleteEducation}
    />
    <hr />
    <Button text="Generate Preview" color="outline-success" onClick={onPreview} />
    <Button text="Reset all fields" color="outline-danger" onClick={onReset} />
  </form>
);

CvForm.propTypes = {
  cv: PropTypes.shape({
    personalInfo: PropTypes.objectOf(PropTypes.string.isRequired),

    experience: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,

    education: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,
  }).isRequired,

  onChangePersonal: PropTypes.func.isRequired,
  onChangeExperience: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
  onDeleteExperience: PropTypes.func.isRequired,
  onChangeEducation: PropTypes.func.isRequired,
  onAddEducation: PropTypes.func.isRequired,
  onDeleteEducation: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default CvForm;
