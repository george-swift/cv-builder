import React, { useState } from 'react';
import { v4 } from 'uuid';
import CvForm from './form/Form';
import controlledFields from '../data/Control';
import main from '../styles/main.module.css';

const BuildSection = () => {
  const [cv, setCv] = useState(controlledFields);

  const editPersonalInfo = (e) => {
    const { name, value } = e.target;

    setCv((oldState) => ({
      ...oldState,
      personalInfo: {
        ...oldState.personalInfo,
        [name]: value,
      },
    }));
  };

  const editExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((oldState) => {
      const newExperience = oldState.experience.map((item) => {
        if (item.id === id) return { ...item, [name]: value };
        return item;
      });
      return { ...oldState, experience: [...newExperience] };
    });
  };

  const addExperience = () => {
    setCv((oldState) => ({
      ...oldState,
      experience: [
        ...oldState.experience,
        {
          id: v4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const deleteExperience = (id) => {
    setCv((oldState) => {
      const experienceField = oldState.experience.filter((item) => item.id !== id);
      return { ...oldState, experience: [...experienceField] };
    });
  };

  const editEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((oldState) => {
      const newEducation = oldState.education.map((item) => {
        if (item.id === id) return { ...item, [name]: value };
        return item;
      });
      return { ...oldState, education: [...newEducation] };
    });
  };

  const addEducation = () => {
    setCv((oldState) => ({
      ...oldState,
      education: [
        ...oldState.education,
        {
          id: v4(),
          universityName: '',
          major: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const deleteEducation = (id) => {
    setCv((oldState) => {
      const educationField = oldState.education.filter((item) => item.id !== id);
      return { ...oldState, education: [...educationField] };
    });
  };

  return (
    <main className="container p-4">
      <div className={main.formWrapper}>
        <CvForm
          cv={cv}
          onChangePersonal={editPersonalInfo}
          onChangeExperience={editExperience}
          onAddExperience={addExperience}
          onDeleteExperience={deleteExperience}
          onChangeEducation={editEducation}
          onAddEducation={addEducation}
          onDeleteEducation={deleteEducation}
        />
      </div>
    </main>
  );
};

export default BuildSection;
