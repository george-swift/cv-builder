import { v4 } from 'uuid';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    professionalTitle: '',
    emailAddress: '',
    phoneNumber: '',
  },

  experience: [
    {
      id: v4(),
      position: '',
      company: '',
      jobDescription: '',
      start: '',
      end: '',
    },
  ],

  education: [
    {
      id: v4(),
      university: '',
      major: '',
      start: '',
      end: '',
    },
  ],
};

export default initialState;
