import { Input, Textarea } from '../Input';

export default function FormField({ type, currentItem, inputChange }) {
  const educationField = (
    <>
      <Input
        id="schoolName"
        text={'School name'}
        value={currentItem.schoolName}
        handler={inputChange}
      />
      <Input
        id="degree"
        text={'Degree'}
        value={currentItem.degree}
        handler={inputChange}
      />
      <Input
        id="location"
        text="Location"
        value={currentItem.location}
        handler={inputChange}
      />
      <Input
        id="start"
        text={'Start date'}
        value={currentItem.start}
        handler={inputChange}
      />
      <Input
        id="end"
        text={'End date'}
        value={currentItem.end}
        handler={inputChange}
      />
    </>
  );

  const experienceField = (
    <>
      <Input
        id="company"
        text={'Company name'}
        value={currentItem.company}
        handler={inputChange}
      />
      <Input
        id="position"
        text={'Position'}
        value={currentItem.position}
        handler={inputChange}
      />
      <Input
        id="location"
        text="Location"
        value={currentItem.location}
        handler={inputChange}
      />
      <Input
        id="start"
        text={'Start date'}
        value={currentItem.start}
        handler={inputChange}
      />
      <Input
        id="end"
        text={'End date'}
        value={currentItem.end}
        handler={inputChange}
      />
      <Textarea
        id="description"
        text="Additioanl description"
        value={currentItem.description}
        handler={inputChange}
      />
    </>
  );

  return type === 'education' ? educationField : experienceField;
}
