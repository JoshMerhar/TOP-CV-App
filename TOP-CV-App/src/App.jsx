import { useState } from 'react'
import GeneralInfo from '../src/components/general-info'
import EducationInfo from '../src/components/education-info'
import DisplayInfo from './components/display-info'
import '../src/styles/main.css'

export default function App() {
  const [genInfo, setGenInfo] = useState({ firstName: 'FirstName', lastName: 'LastName', email: '', phone: '' });
  const [educationInfo, setEducationInfo] = useState({ school: '', degree: '', fromYear: '', toYear: '' });

  return (
    <>
      <div className="container">
        <div className="inputs">
          <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} />
          <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
        </div>
        <div className="main-display">
          <DisplayInfo genInfo={genInfo} educationInfo={educationInfo} />
        </div>
      </div>
    </>
  )
}

