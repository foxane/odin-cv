// Deps
import { useState } from 'react';
import { defaultData } from './components/utils';

// Components
import Personal from './components/Personal';
import Education from './components/Education';
import Result from './components/Result';

// Cascader styler or somth (css)
import './styles/index.css';
import './styles/form.css';

export default function App() {
  const [personal, setPersonal] = useState(defaultData.personal);
  const [education, setEducation] = useState(defaultData.education);

  return (
    <>
      <Personal personal={personal} setPersonal={setPersonal} />
      <Education education={education} setEducation={setEducation} />
      <Result personal={personal} />
    </>
  );
}
