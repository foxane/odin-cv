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
        id="start"
        text={'Start date'}
        value={currentItem.start}
        handler={inputChange}
        type="date"
      />
      <Input
        id="end"
        text={'End date'}
        value={currentItem.end}
        handler={inputChange}
        type="date"
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
        id="start"
        text={'Start date'}
        value={currentItem.start}
        handler={inputChange}
        type="date"
      />
      <Input
        id="end"
        text={'End date'}
        value={currentItem.end}
        handler={inputChange}
        type="date"
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
