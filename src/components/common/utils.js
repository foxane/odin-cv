import { v4 as uuidv4 } from 'uuid';
const defaultData = {
  personal: {
    name: 'Klein Moretti',
    email: 'thatfacelessguy@lotm.com',
    tel: '+1 555-123-4567',
    address: 'New York, NY, USA',
    position: 'Software Engineer',
  },

  education: [
    {
      id: uuidv4(),
      schoolName: 'New York University',
      degree: 'Bachelor of Science in Computer Science',
      location: 'New York, NY',
      start: '2015/09',
      end: '2019/05',
    },
    {
      id: uuidv4(),
      schoolName: 'Columbia University',
      degree: 'Master of Science in Software Engineering',
      location: 'New York, NY',
      start: '2019/09',
      end: '2021/05',
    },
  ],

  emptyEducation: {
    id: '',
    schoolName: '',
    degree: '',
    location: '',
    start: '',
    end: '',
  },

  experience: [
    {
      id: uuidv4(),
      company: 'Tech Innovations Inc.',
      position: 'Junior Software Engineer',
      location: 'New York, NY',
      start: '2019/06',
      end: '2021/03',
      description:
        "Deploy on friday, did not come home on the weekend. Fixed bug on production while only make one additional bug. Took 6 days to change single line of code. I don't know what else to write",
    },
    {
      id: uuidv4(),
      company: 'Advanced Solutions LLC',
      position: 'Software Engineer',
      location: 'New York, NY',
      start: '2021/04',
      end: 'present',
      description:
        'Lead development of scalable software solutions, managed project timelines, and provided mentorship to junior developers. Focused on improving system performance and user experience.',
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
