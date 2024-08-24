import Section from './common/generic-section/Section';
import '../styles/education.css';

export default function Education({ education, setEducation }) {
  return (
    <Section
      items={education}
      setItems={setEducation}
      type="education"
      textKey="schoolName"
    />
  );
}
