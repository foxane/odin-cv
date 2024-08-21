import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import '../styles/education.css';

export default function Education({ education, setEducation }) {
  const [isForm, setIsForm] = useState(false);
  const changeForm = () => setIsForm(!isForm);
  const eduList = education.map((item) => (
    <EduCard key={item.id} schoolName={item.schoolName} />
  ));
  const addEdu = (newObj) => {
    newObj.id = uuidv4();
    console.log(newObj);
    console.log(education);
    setEducation([...education, newObj]);
    console.log(education);
  };
  const removeEdu = (id) => {
    setEducation(education.filter((item) => item.id === id));
  };
  const updateEdu = (id, newObj) => {
    setEducation(education.map((item) => (item.id === id ? newObj : item)));
  };

  return (
    <div className="form education">
      <h3>Education</h3>
      {!isForm && eduList}
      {isForm && <EduForm addEdu={addEdu} />}
      <button type="button" onClick={changeForm}>
        {isForm ? 'Im a form' : 'im a list'}
      </button>
    </div>
  );
}

function EduCard({ schoolName }) {
  return (
    <div className="edu-card">
      <b>{schoolName}</b>
    </div>
  );
}

function EduForm({ addEdu }) {
  const [eduObj, setEduObj] = useState({}); // Initialize with empty object
  const submit = () => addEdu(eduObj);
  const handler = (e) => {
    const { id, value } = e.target;
    setEduObj((prevState) => ({ ...prevState, [id]: value }));
  };
  return (
    <>
      <Input text="School name" id="schoolName" handler={handler} />
      <Input text="Degree" id="degree" handler={handler} />
      <Input text="Start date" id="start" type="date" handler={handler} />
      <Input text="End" id="end" type="date" handler={handler} />
      <button onClick={submit}>Add</button>
    </>
  );
}
