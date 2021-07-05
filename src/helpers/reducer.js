import { v4 } from 'uuid';

export default function reducer(state, action) {
  const { name, value } = action.payload?.target ?? '';
  const ID = action.payload?.id;

  const newExperience = state.experience.map((item) => ((item.id === ID)
    ? { ...item, [name]: value }
    : item));

  const experienceFIeld = state.experience.filter((item) => item.id !== ID);

  const newEducation = state.education.map((item) => ((item.id === ID)
    ? { ...item, [name]: value }
    : item));

  const educationField = state.education.filter((item) => item.id !== ID);

  switch (action.type) {
    case 'EDIT_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [name]: value,
        },
      };

    case 'EDIT_EXPERIENCE':
      return {
        ...state,
        experience: [...newExperience],
      };

    case 'ADD_EXPERIENCE_SECTION':
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            id: v4(),
            position: '',
            company: '',
            jobDescription: '',
            start: '',
            end: '',
          },
        ],
      };

    case 'DELETE_EXPERIENCE_SECTION':
      return {
        ...state,
        experience: [...experienceFIeld],
      };

    case 'EDIT_EDUCATION':
      return {
        ...state,
        education: [...newEducation],
      };

    case 'ADD_EDUCATION_SECTION':
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: v4(),
            university: '',
            major: '',
            start: '',
            end: '',
          },
        ],
      };

    case 'DELETE_EDUCATION_SECTION':
      return {
        ...state,
        education: [...educationField],
      };

    case 'RESET_FIELDS':
      return action.payload;

    default:
      return state;
  }
}
