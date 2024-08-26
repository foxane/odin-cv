import { useState, useEffect } from 'react';
import { capitalize } from '../utils';
import SectionHeader from '../SectionHeader';
import List from './List';
import Form from './Form';

export default function Section({ items, setItems, type, textKey }) {
  const [display, setDisplay] = useState('list');
  const [currentItem, setCurrentItem] = useState(null);
  const [isMinimized, setIsMinimized] = useState(true);

  // DEBUG: Show items
  useEffect(() => {
    console.table(items);
  }, [items]);

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

  // Object state
  const addItem = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };
  const editItem = (editedItem) => {
    setItems((prevState) =>
      prevState.map((item) => (item.id === editedItem.id ? editedItem : item)),
    );
  };
  const deleteItem = (deletedItem) => {
    setItems((prevState) => prevState.filter((item) => item !== deletedItem));
  };

  return (
    <div className={`form ${type}`}>
      <SectionHeader
        headerText={capitalize(type)}
        handler={() => setIsMinimized(!isMinimized)}
        isMinimized={isMinimized}
      />
      {isMinimized ? null : display === 'list' ? (
        <List
          itemList={items}
          text={textKey}
          showAddForm={showAddForm}
          showEditForm={showEditForm}
          deleteItem={deleteItem}
        />
      ) : (
        <Form
          type={type}
          item={currentItem}
          showList={showList}
          addItem={addItem}
          editItem={editItem}
        />
      )}
    </div>
  );
}
