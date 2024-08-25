import Section from '../common/generic-section/Section';

export default function Experience({ experience, setExperience }) {
  return (
    <Section
      items={experience}
      setItems={setExperience}
      type="experience"
      textKey="company"
    />
  );
}
