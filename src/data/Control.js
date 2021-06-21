import { v4 } from 'uuid';

const controlledFields = {
  personalInfo: {
    firstName: '',
    lastName: '',
    professionalTitle: '',
    emailAddress: '',
    phoneNumber: '',
    website: '',
  },

  experience: [
    {
      id: v4(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ],

  education: [
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

export default controlledFields;
