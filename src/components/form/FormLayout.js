import React from 'react';
import PropTypes from 'prop-types';
import { VscPreview } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import PersonalInformation from './Personal';
import Education from './Education';
import Experience from './Experience';
import Button from '../utilities/Button';
import Preview from '../Preview';

const CvForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onReset,
}) => (
  <form className="row g-3 px-4">
    <PersonalInformation
      userInfo={cv.personalInfo}
      onChange={onChangePersonal}
    />
    <hr />
    <Education
      education={cv.education}
      onChange={onChangeEducation}
      onAdd={onAddEducation}
      onDelete={onDeleteEducation}
    />
    <hr />
    <Experience
      experience={cv.experience}
      onChange={onChangeExperience}
      onAdd={onAddExperience}
      onDelete={onDeleteExperience}
    />
    <hr />
    <div className="col-md-6">
      <Link
        to="/preview"
        element={<Preview />}
        className="btn btn-sm btn-outline-success w-100"
      >
        <span className="me-2">Preview Template</span>
        <VscPreview />
      </Link>
    </div>
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
  onReset: PropTypes.func.isRequired,
};

export default CvForm;
