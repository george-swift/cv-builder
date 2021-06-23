import { v4 } from 'uuid';

export default function reducer(state, action) {
  const { name, value } = action.payload ? action.payload : '';

  const newExperience = state.experience.map((item) => ((item.id === action.id)
    ? { ...item, [name]: value }
    : item));

  const experienceFIeld = state.experience.filter((item) => item.id !== action.id);

  const newEducation = state.education.map((item) => ((item.id === action.id)
    ? { ...item, [name]: value }
    : item));

  const educationField = state.education.filter((item) => item.id !== action.id);

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
            city: '',
            from: '',
            to: '',
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
            city: '',
            from: '',
            to: '',
          },
        ],
      };

    case 'DELETE_EDUCATION_SECTION':
      return {
        ...state,
        education: [...educationField],
      };

    case 'RESET_FIELDS':
      return action.reset;

    default:
      return state;
  }
}
