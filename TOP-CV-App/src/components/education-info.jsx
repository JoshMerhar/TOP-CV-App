import { v1 } from 'uuid'
import InfoInput from './input'
import '../styles/main.css'

export default function EducationInfo({ educationInfo, setEducationInfo }) {

    function handleChanges(index, id, value) {
        setEducationInfo(prevState => {
          const newEducationInfo = [...prevState]; 
          newEducationInfo[index] = {
            ...newEducationInfo[index],
            [id]: value
          };
          return newEducationInfo;
      });
    }

    function addEducationSection() {
      setEducationInfo(prevState => [
        ...prevState,
        {
          id: v1(),
          school: '',
          degree: '',
          fromYear: '',
          toYear: ''
        }
      ]);
    }

    function removeEducationSection(index) {
      setEducationInfo(prevState => {
        const newEducationInfo = [...prevState];
        newEducationInfo.splice(index, 1);
        return newEducationInfo;
      });
    }

    return (
        <>
          <div className="inputs-block">
            <h3>Education Information</h3>
            {educationInfo.map((education, index) => (
              <div key={education.id} className="inputs-block">
                <InfoInput
                  id={`school-${index}`}
                  label="School:"
                  onChange={(value) => handleChanges(index, 'school', value)}
                />
                <InfoInput
                  id={`degree-${index}`}
                  label="Degree:"
                  onChange={(value) => handleChanges(index, 'degree', value)}
                />
                <InfoInput
                  id={`fromYear-${index}`}
                  label="From:"
                  placeholder="Start Year"
                  onChange={(value) => handleChanges(index, 'fromYear', value)}
                />
                <InfoInput
                  id={`toYear-${index}`}
                  label="To:"
                  placeholder="End Year"
                  onChange={(value) => handleChanges(index, 'toYear', value)}
                />
                <button type="button" id="remove-education-button" onClick={() => removeEducationSection(index)}>Remove Education</button>
              </div>
            ))}
            <button type="button" id="add-education-button" onClick={addEducationSection}>Add Education</button>
          </div>
        </>
    )
}