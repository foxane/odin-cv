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
      <h2>{name}</h2>
      <div className="details">
        <p>{tel}</p>
        <p>{email}</p>
        <p>{address}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}

function EducationResult({ education }) {
  const educationList = education.map((item) => {
    return (
      <div key={item.id} className="result-card">
        <div className="left">
          <div className="date">
            <p>{item.start}</p>
            <p className="separator">~</p>
            <p>{item.end}</p>
          </div>
          <p>{item.location}</p>
        </div>
        <div className="right">
          <h4>{item.schoolName}</h4>
          <p>{item.degree}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="result-container education">
      <h3>Education</h3>
      {educationList}
    </div>
  );
}

function ExperienceResult({ experience }) {
  const experienceList = experience.map((item) => {
    return (
      <div key={item.id} className="result-card">
        <div className="left">
          <div className="date">
            <p>{item.start}</p>
            <p className="separator">~</p>
            <p>{item.end}</p>
          </div>
          <p>{item.location}</p>
        </div>
        <div className="right">
          <h4>{item.company}</h4>
          <i>{item.position}</i>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="result-container experience">
      <h3>Experience</h3>
      {experienceList}
    </div>
  );
}
