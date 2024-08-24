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
  const addItem = (item) => {
    setEducation((prevState) => [...prevState, item]);
  };
  const updateItem = (updatedItem) => {
    setEducation((prevState) =>
      prevState.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    );
  };
  const deleteItem = (itemToDelete) => {
    setEducation((prevState) =>
      prevState.filter((item) => item !== itemToDelete),
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
          deleteItem={deleteItem}
        />
      ) : (
        <Form
          type="education"
          item={currentItem}
          showList={showList}
          addItem={addItem}
          editItem={updateItem}
        />
      )}
    </div>
  );
}
