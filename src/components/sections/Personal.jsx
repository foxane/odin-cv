import { useState } from 'react';
import { Input } from '../common/Input';
import SectionHeader from '../common/SectionHeader';

export default function Personal({ personal, setPersonal }) {
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
          <Input
            id="name"
            text="Full name"
            handler={changePersonal}
            value={personal.name}
          />
          <Input
            value={personal.tel}
            id="tel"
            text="Phone number"
            handler={changePersonal}
            type="tel"
          />
          <Input
            value={personal.email}
            id="email"
            text="Email"
            handler={changePersonal}
            type="email"
          />
          <Input
            id="address"
            text="Address"
            handler={changePersonal}
            value={personal.address}
          />
          <Input
            id="position"
            text="Position"
            handler={changePersonal}
            value={personal.position}
          />
        </>
      )}
    </div>
  );
}
