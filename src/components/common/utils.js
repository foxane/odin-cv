import { v4 as uuidv4 } from 'uuid';

const defaultData = {
  personal: {
    name: 'Josephin Ganardo',
    email: 'jganardo@corp.com',
    tel: '00 99274',
    address: 'Jakarta, Indonesia',
    position: 'Wengdev',
  },

  education: [
    {
      id: uuidv4(),
      schoolName: 'University of Degenerate',
      degree: 'Bachelor in Baddesery',
      start: '2016-07-21',
      end: '2020-06-10',
    },
    {
      id: uuidv4(),
      schoolName: 'Saints University',
      degree: 'Master in Kindness',
      start: '2020-08-15',
      end: '2024-10-16',
    },
  ],

  emptyEducation: {
    id: '',
    schoolName: '',
    degree: '',
    start: '',
    end: '',
  },

  experience: [
    {
      id: uuidv4(),
      company: 'E Corp',
      position: 'Lowly Web Developer',
      start: '2018-02-12',
      end: '2019-05-10',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, blanditiis.',
    },
    {
      id: uuidv4(),
      company: 'F Corp',
      position: 'Mid Web Developer',
      start: '2018-02-12',
      end: '2019-05-10',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, blanditiis.',
    },
  ],

  emptyExperience: {
    id: '',
    company: '',
    position: '',
    start: '',
    end: '',
    description: '',
  },
};

const formatDate = (dateString) => {
  const date = dateString.split('-').join(' ');
  return date;
};

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export { defaultData, formatDate, capitalize };
