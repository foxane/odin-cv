import Section from '../common/generic-section/Section';

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
