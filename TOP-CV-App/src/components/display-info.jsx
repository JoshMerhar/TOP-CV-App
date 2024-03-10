export default function DisplayInfo({ genInfo, educationInfo, workInfo }) {
  return (
    <>
      <div className="document-display">
        <div className="general-info-display">
          <h2 className="displayed-name">{genInfo.firstName} {genInfo.lastName}</h2>
          <h3 className="displayed-email">Email: {genInfo.email}</h3>
          <h3 className="displayed-phone">Phone: {genInfo.phone}</h3>
        </div>
        <div className="education-info-display">
          <h1 className="education-main-title">Education</h1>
          {educationInfo.map((education) => (
            <div key={education.id} className="displayed-education">
              <h3 className="education-school">{education.school}</h3>
              <p>
                {education.degree}<br></br>
                <em>{education.fromYear} - {education.toYear}</em>
              </p>
              </div>
            ))}
        </div>
        <div className="work-info-display">
          <h1 className="work-main-title">Work History</h1>
          {workInfo.map((job) => (
            <div key={job.id} className="displayed-job">
              <h3 className="job-employer">{job.employer}</h3>
              <p>
                <strong className="job-title">{job.title}</strong><br></br>
                <em>{job.startDate} - {job.endDate}</em><br></br>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}