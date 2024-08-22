export default function Input({ id, handler, text, value, type = 'text' }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={handler} value={value} />
    </>
  );
}
