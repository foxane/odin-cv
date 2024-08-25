// Deps
import { useState } from 'react';
import { defaultData } from './components/common/utils';

// Components
import Personal from './components/sections/Personal';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Result from './components/sections/Result';

// Cascader styler or somth (css)
import './styles/index.css';
import './styles/form.css';

export default function App() {
  const [personal, setPersonal] = useState(defaultData.personal);
  const [education, setEducation] = useState(defaultData.education);
  const [experience, setExperience] = useState(defaultData.experience);

  return (
    <>
      <div className="input-section">
        <Personal personal={personal} setPersonal={setPersonal} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </div>
      <Result
        personal={personal}
        education={education}
        experience={experience}
      />
    </>
  );
}
