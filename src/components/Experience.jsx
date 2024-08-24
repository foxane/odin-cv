import { useState, useEffect } from 'react';
import List from './common/List';
import Form from './common/Form';

export default function Experience({ experience, setExperience }) {
  const [display, setDisplay] = useState('list');
  const [currentItem, setCurrentItem] = useState(null);

  // DEBUG : Watch education state on change
  useEffect(() => {
    console.table(experience);
  }, [experience]);

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

  // Obj state
  const addItem = (newItem) => {
    setExperience((prevState) => [...prevState, newItem]);
  };
  const updateItem = (updatedItem) => {
    setExperience((prevState) =>
      prevState.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    );
  };
  const deleteItem = (itemToDelete) => {
    setExperience((prevState) =>
      prevState.filter((item) => item !== itemToDelete),
    );
  };

  return (
    <div className="form experience">
      <h3>Experience</h3>
      {display === 'list' ? (
        <List
          itemList={experience}
          text="company"
          showEditForm={showEditForm}
          showAddForm={showAddForm}
          deleteItem={deleteItem}
        />
      ) : (
        <Form
          type="experience"
          item={currentItem}
          showList={showList}
          addItem={addItem}
          editItem={updateItem}
        />
      )}
    </div>
  );
}
