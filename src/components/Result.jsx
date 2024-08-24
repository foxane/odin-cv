export default function Result({ personal, education, experience }) {
  return (
    <div className="result">
      <PersonalResult personal={personal} />
      <EducationResult education={education} />
      <ExperienceResult experience={experience} />
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

function EducationResult({ education }) {
  const educationList = education.map((item) => {
    return (
      <div key={item.id} className="edu-card">
        <p>{item.schoolName}</p>
        <p>{item.degree}</p>
        <p>{item.start}</p>
        <p>{item.end}</p>
      </div>
    );
  });

  return educationList;
}

function ExperienceResult({ experience }) {
  const experienceList = experience.map((item) => {
    return (
      <div key={item.id} className="edu-card">
        <p>{item.company}</p>
        <p>{item.position}</p>
        <p>{item.start}</p>
        <p>{item.end}</p>
        <p>{item.description}</p>
      </div>
    );
  });

  return experienceList;
}
