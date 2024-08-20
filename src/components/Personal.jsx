function Personal({ data, handler }) {
  const { name, tel, email, address, position } = data;

  return (
    <div className="personal">
      <input type="text" id="name" onChange={handler} />
      <input type="text" id="email" onChange={handler} />
    </div>
  );
}

export default Personal;
