export default function DisplayInfo({ genInfo, educationInfo, workInfo }) {
  return (
    <>
      <div className="general-info-display">
        <h2>{genInfo.firstName} {genInfo.lastName}</h2>
        <h3>Email: {genInfo.email}</h3>
        <h3>Phone: {genInfo.phone}</h3>
      </div>
      <div className="education-info-display">
        <h1>Education</h1>
        {educationInfo.map((education) => (
          <div key={education.id}>
            <h3>{education.school}</h3>
            <p>
              {education.degree}<br></br>
              {education.fromYear} - {education.toYear}
            </p>
            </div>
          ))}
      </div>
      <div className="work-info-display">
        <h1>Work History</h1>
        {workInfo.map((job) => (
          <div key={job.id}>
            <h3>{job.employer}</h3>
            <p>
              <strong>{job.title}</strong><br></br>
              {job.startDate} - {job.endDate}<br></br>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}