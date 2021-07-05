import React, { useContext } from 'react';
import CvForm from './form/FormLayout';
import BuildContext from '../helpers/BuildContext';
import initialState from '../data/static';

const Editor = () => {
  const { state, dispatch } = useContext(BuildContext);

  const editPersonalInfo = (e) => dispatch({
    type: 'EDIT_INFO',
    payload: {
      target: e.target,
    },
  });

  const editExperience = (e, id) => dispatch({
    type: 'EDIT_EXPERIENCE',
    payload: {
      target: e.target,
      id,
    },
  });

  const editEducation = (e, id) => dispatch({
    type: 'EDIT_EDUCATION',
    payload: {
      target: e.target,
      id,
    },
  });

  const addExperience = () => dispatch({ type: 'ADD_EXPERIENCE_SECTION' });
  const deleteExperience = (id) => dispatch({
    type: 'DELETE_EXPERIENCE_SECTION',
    payload: { id },
  });

  const addEducation = () => dispatch({ type: 'ADD_EDUCATION_SECTION' });
  const deleteEducation = (id) => dispatch({
    type: 'DELETE_EDUCATION_SECTION',
    payload: { id },
  });

  const resetFields = () => dispatch({ type: 'RESET_FIELDS', payload: initialState });

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

export default Editor;
