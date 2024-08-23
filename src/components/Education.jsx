import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { defaultData } from './common/utils';
import Input from './common/Input';
import '../styles/education.css';
export default Education;

function Education({ education, setEducation }) {
  const [display, setDisplay] = useState('list');
  const [currentItem, setCurrentItem] = useState(null);

  // DEBUG : Watch education state on change
  useEffect(() => {
    console.table(education);
  }, [education]);

  // UI state
  const showList = () => {
    setCurrentItem(null);
    setDisplay('list');
  };
  const showEditForm = (item) => {
    setCurrentItem(item);
    setDisplay('form');
  };
  const showAddForm = () => {
    setCurrentItem(null);
    setDisplay('form');
  };

  // Object State
  const addEducation = (item) => {
    setEducation((prevState) => [...prevState, item]);
    console.table(education);
  };
  const editEducation = (editedItem) => {
    setEducation((prevState) =>
      prevState.map((item) => (item.id === editedItem.id ? editedItem : item)),
    );
  };
  const deleteEducation = (deletedItem) => {
    setEducation((prevState) =>
      prevState.filter((item) => item !== deletedItem),
    );
  };

  return (
    <div className="form education">
      <h3>Education</h3>
      {display === 'list' ? (
        <EducationList
          items={education}
          showEditForm={showEditForm}
          showAddForm={showAddForm}
          deleteEducation={deleteEducation}
        />
      ) : (
        <EducationForm
          item={currentItem}
          showList={showList}
          addEducation={addEducation}
          editEducation={editEducation}
        />
      )}
    </div>
  );
}

// List component
function EducationList({ items, showEditForm, showAddForm, deleteEducation }) {
  const list = items.map((item) => {
    return (
      <div
        key={item.id}
        className="edu-card cursor"
        onClick={() => showEditForm(item)}
      >
        <p>{item.schoolName}</p>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteEducation(item);
          }}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <>
      {list}
      <button onClick={showAddForm}>Add</button>
    </>
  );
}

// Form component
function EducationForm({ item, showList, addEducation, editEducation }) {
  let isEdit = item === null ? false : true;
  const [currentObj, setCurrentObj] = useState(
    isEdit ? item : defaultData.emptyEducation,
  );

  // Input changes
  const editValue = (e) => {
    const { id, value } = e.target;
    setCurrentObj((prevState) => ({ ...prevState, [id]: value }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editEducation(currentObj);
    } else {
      const updatedObj = { ...currentObj, id: uuidv4() }; // Workaround on react async state update
      addEducation(updatedObj);
    }
    showList();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        id="schoolName"
        text={'School name'}
        value={currentObj.schoolName}
        handler={editValue}
      />
      <Input
        id="degree"
        text={'Degree'}
        value={currentObj.degree}
        handler={editValue}
      />
      <Input
        id="start"
        text={'Start date'}
        value={currentObj.start}
        handler={editValue}
        type="date"
      />
      <Input
        id="end"
        text={'End date'}
        value={currentObj.end}
        handler={editValue}
        type="date"
      />
      <button onClick={showList} type="button">
        Cancel
      </button>
      <button type="submit">{isEdit ? 'Save' : 'Add'}</button>
    </form>
  );
}
