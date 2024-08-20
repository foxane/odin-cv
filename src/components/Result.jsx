export default function Result({ personal }) {
  return (
    <div className="result">
      <PersonalResult personal={personal} />
    </div>
  );
}

function PersonalResult({ personal }) {
  const { name, tel, email, address, position } = personal;
  return (
    <div className="personal">
      <h1>{name}</h1>
      <p>{tel}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{position}</p>
    </div>
  );
}
