import { useState } from 'react';
import Personal from './components/Personal';
import defaultData from './components/defaultData';
import './styles/index.css';
import './styles/form.css';

export default function App() {
  const [personal, setPersonal] = useState(defaultData.personal);

  const changePersonal = (e) => {
    const { id, value } = e.target;

    setPersonal((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <Personal data={{ personal }} handler={changePersonal} />
      <h1>
        {personal.name}
        {personal.email}
      </h1>
    </>
  );
}
