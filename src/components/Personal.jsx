import Input from './common/Input';

function Personal({ setPersonal }) {
  const changePersonal = (e) => {
    const { id, value } = e.target;
    setPersonal((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div className="form personal">
      <h3>Personal details</h3>
      <Input id="name" text="Full name" handler={changePersonal} />
      <Input id="tel" text="Phone number" handler={changePersonal} type="tel" />
      <Input id="email" text="Email" handler={changePersonal} type="email" />
      <Input id="address" text="Address" handler={changePersonal} />
      <Input id="position" text="Position" handler={changePersonal} />
    </div>
  );
}

export default Personal;
