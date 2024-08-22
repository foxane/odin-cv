import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { defaultData } from './common/utils';
import Input from './common/Input';
import '../styles/education.css';
export default Education;

function Education({ education, setEducation }) {
  const [display, setDisplay] = useState('list');
  const [currentItem, setCurrentItem] = useState(null);

  const showEditForm = (item) => {
    console.log(item);
    setCurrentItem(item);
    setDisplay('form');
  };
  const showList = () => {
    setCurrentItem(null);
    setDisplay('list');
  };

  return (
    <div className="form education">
      {display === 'list' ? (
        <EducationList items={education} showEditForm={showEditForm} />
      ) : (
        <EducationForm item={currentItem} showList={showList} />
      )}
    </div>
  );
}

function EducationList({ items, showEditForm }) {
  const list = items.map((item) => {
    return (
      <div
        key={item.id}
        className="edu-card cursor"
        onClick={() => showEditForm(item)}
      >
        <p>{item.schoolName}</p>
      </div>
    );
  });

  return (
    <>
      {list}
      <button>Add</button>
    </>
  );
}

function EducationForm({ item, showList }) {
  const [currentObj, setCurrentObj] = useState(
    item !== null ? item : defaultData.emptyEducation,
  );

  const editValue = (e) => {
    const { id, value } = e.target;
    setCurrentObj((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <>
      <Input
        id="schoolName"
        text={'School name'}
        value={currentObj.schoolName}
        handler={editValue}
      />
      <button onClick={showList}>Show list</button>
    </>
  );
}
