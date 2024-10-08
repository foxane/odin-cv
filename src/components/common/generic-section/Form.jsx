import { useState } from 'react';
import { defaultData } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import FormField from './FormField';

export default function Form({ type, item, showList, addItem, editItem }) {
  let isEdit = item === null ? false : true;
  const emptyitem =
    type === 'education'
      ? defaultData.emptyEducation
      : defaultData.emptyExperience;
  const [currentItem, setCurrentItem] = useState(isEdit ? item : emptyitem);

  // Input changes
  const inputChange = (e) => {
    const { id, value } = e.target;
    setCurrentItem((prevState) => ({ ...prevState, [id]: value }));
  };

  // Form submission
  const submitHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      editItem(currentItem);
    } else {
      const updatedItem = { ...currentItem, id: uuidv4() };
      addItem(updatedItem);
    }
    showList();
  };

  return (
    <form onSubmit={submitHandler} className="sub-form">
      <FormField
        type={type}
        currentItem={currentItem}
        inputChange={inputChange}
      />
      <div className="form-btn">
        <button onClick={showList} type="button" className="cursor cancel">
          Cancel
        </button>
        <button type="submit" className="cursor submit">
          {isEdit ? 'Save' : 'Add'}
        </button>
      </div>
    </form>
  );
}
