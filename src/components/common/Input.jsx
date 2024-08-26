function Input({ id, handler, text, value, type = 'text' }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={handler} value={value} />
    </>
  );
}

function Textarea({ id, text, value, handler }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <textarea id={id} onChange={handler} value={value} rows={5}></textarea>
    </>
  );
}

export { Input, Textarea };
