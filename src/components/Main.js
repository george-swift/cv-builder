import React from 'react';
import PropTypes from 'prop-types';
import CvForm from './form/FormLayout';
import initialState from '../data/static';

const FormManager = ({ state, dispatch }) => {
  const editPersonalInfo = (e) => dispatch({
    type: 'EDIT_INFO',
    payload: e.target,
  });

  const editExperience = (e, id) => dispatch({
    type: 'EDIT_EXPERIENCE',
    payload: e.target,
    id,
  });

  const editEducation = (e, id) => dispatch({
    type: 'EDIT_EDUCATION',
    payload: e.target,
    id,
  });

  const addExperience = () => dispatch({ type: 'ADD_EXPERIENCE_SECTION' });
  const deleteExperience = (id) => dispatch({ type: 'DELETE_EXPERIENCE_SECTION', id });

  const addEducation = () => dispatch({ type: 'ADD_EDUCATION_SECTION' });
  const deleteEducation = (id) => dispatch({ type: 'DELETE_EDUCATION_SECTION', id });

  const resetFields = () => dispatch({
    type: 'RESET_FIELDS',
    reset: initialState,
  });

  return (
    <div className="wrapper">
      <CvForm
        cv={state}
        onChangePersonal={editPersonalInfo}
        onChangeExperience={editExperience}
        onAddExperience={addExperience}
        onDeleteExperience={deleteExperience}
        onChangeEducation={editEducation}
        onAddEducation={addEducation}
        onDeleteEducation={deleteEducation}
        onReset={resetFields}
      />
    </div>
  );
};

FormManager.propTypes = {
  state: PropTypes.shape({
    personalInfo: PropTypes.objectOf(PropTypes.string.isRequired),

    experience: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,

    education: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,
  }).isRequired,

  dispatch: PropTypes.func.isRequired,
};

export default FormManager;
