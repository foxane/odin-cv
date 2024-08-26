import { useState } from 'react';
import { Input } from '../common/Input';
import SectionHeader from '../common/SectionHeader';

export default function Personal({ setPersonal }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const changePersonal = (e) => {
    const { id, value } = e.target;
    setPersonal((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div className="form personal">
      <SectionHeader
        headerText="Personal details"
        handler={() => setIsMinimized(!isMinimized)}
        isMinimized={isMinimized}
      />
      {isMinimized ? null : (
        <>
          <Input id="name" text="Full name" handler={changePersonal} />
          <Input
            id="tel"
            text="Phone number"
            handler={changePersonal}
            type="tel"
          />
          <Input
            id="email"
            text="Email"
            handler={changePersonal}
            type="email"
          />
          <Input id="address" text="Address" handler={changePersonal} />
          <Input id="position" text="Position" handler={changePersonal} />
        </>
      )}
    </div>
  );
}
