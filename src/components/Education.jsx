import { useState, useEffect } from 'react';
import List from './common/List';
import Form from './common/Form';
import '../styles/education.css';

export default function Education({ education, setEducation }) {
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
        <List
          itemList={education}
          text="schoolName"
          showEditForm={showEditForm}
          showAddForm={showAddForm}
          deleteItem={deleteEducation}
        />
      ) : (
        <Form
          type="education"
          item={currentItem}
          showList={showList}
          addItem={addEducation}
          editItem={editEducation}
        />
      )}
    </div>
  );
}
