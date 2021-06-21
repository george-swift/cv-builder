import React from 'react';
import PropTypes from 'prop-types';
import PersonalInformation from './Personal';
import Education from './Education';
import Experience from './Experience';
import '../../styles/main.module.css';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => (
  <form className="row g-3">
    <PersonalInformation
      userInfo={cv.personalInfo}
      onChange={onChangePersonal}
    />
    <Experience
      experience={cv.experience}
      onChange={onChangeExperience}
      onAdd={onAddExperience}
      onDelete={onDeleteExperience}
    />
    <Education
      education={cv.education}
      onChange={onChangeEducation}
      onAdd={onAddEducation}
      onDelete={onDeleteEducation}
    />
  </form>
);

CvForm.propTypes = {
  cv: PropTypes.shape({
    personalInfo: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      professionalTitle: PropTypes.string.isRequired,
      emailAddress: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired,

    experience: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    ).isRequired,

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
  }).isRequired,

  onChangePersonal: PropTypes.func.isRequired,
  onChangeExperience: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
  onDeleteExperience: PropTypes.func.isRequired,
  onChangeEducation: PropTypes.func.isRequired,
  onAddEducation: PropTypes.func.isRequired,
  onDeleteEducation: PropTypes.func.isRequired,
};

export default CvForm;
