function Personal({ handler }) {
  return (
    <div className="form">
      <Input id="name" text="Full name" handler={handler} />
      <Input id="tel" text="Phone number" handler={handler} type="tel" />
      <Input id="email" text="Email" handler={handler} type="email" />
      <Input id="address" text="Address" handler={handler} />
      <Input id="position" text="Position" handler={handler} />
    </div>
  );
}

function Input({ id, handler, text, type = 'text' }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={handler} />
    </>
  );
}

export default Personal;
