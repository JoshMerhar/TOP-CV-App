export default function DisplayInfo({ genInfo, educationInfo }) {
  return (
    <>
      <div className="general-info-display">
        <h2>{genInfo.firstName} {genInfo.lastName}</h2>
        <h3>Email: {genInfo.email}</h3>
        <h3>Phone: {genInfo.phone}</h3>
      </div>
      <div className="education-info-display">
        <h1>Education</h1>
        <h3>{educationInfo.school}</h3>
        <p>
          {educationInfo.degree}<br></br>
          {educationInfo.fromYear} - {educationInfo.toYear}
        </p>

      </div>
    </>
  )
}