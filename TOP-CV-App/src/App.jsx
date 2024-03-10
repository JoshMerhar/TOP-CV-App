import { useState } from 'react'
import GeneralInfo from '../src/components/general-info'
import EducationInfo from '../src/components/education-info'
import WorkInfo from '../src/components/work-info'
import DisplayInfo from './components/display-info'
import '../src/styles/main.css'

export default function App() {
  const [genInfo, setGenInfo] = useState({ firstName: 'FirstName', lastName: 'LastName', email: '', phone: '' });
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  function handleEducationChange(newEducationInfo) {
    setEducationInfo(newEducationInfo);
  }

  return (
    <>
      <div className="top-banner"><em>*~-CV Builder-~*</em></div>
      <div className="container">
        <div className="inputs">
          <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} />
          <EducationInfo educationInfo={educationInfo} setEducationInfo={handleEducationChange} />
          <WorkInfo workInfo={workInfo} setWorkInfo={setWorkInfo} />
        </div>
        <div className="main-display">
          <DisplayInfo genInfo={genInfo} educationInfo={educationInfo} workInfo={workInfo} />
        </div>
      </div>
    </>
  )
}

