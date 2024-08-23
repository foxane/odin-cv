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
      start: '2020-8-15',
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
      corp: 'E Corp',
      start: '2018-02-12',
      end: '2019-05-10',
      position: 'Lowly Web Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, blanditiis.',
    },
    {
      id: uuidv4(),
      corp: 'F Corp',
      start: '2018-02-12',
      end: '2019-05-10',
      position: 'Mid Web Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, blanditiis.',
    },
  ],
};

const formatDate = (dateString) => {
  const date = dateString.split('-').join(' ');
  return date;
};

export { defaultData, formatDate };
