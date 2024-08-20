import { useState } from 'react';
import Personal from './components/Personal';
import Result from './components/Result';
import defaultData from './components/defaultData';
import './styles/index.css';
import './styles/form.css';

export default function App() {
  const [personal, setPersonal] = useState(defaultData.personal);

  const changePersonal = (e) => {
    const { id, value } = e.target;
    console.log(personal);

    setPersonal((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <Personal handler={changePersonal} />
      <Result personal={personal} />
    </>
  );
}
