import { v1 } from 'uuid'
import InfoInput from './input'
import '../styles/main.css'

export default function WorkInfo({ workInfo, setWorkInfo }) {

    function handleChanges(index, id, value) {
        setWorkInfo(prevState => {
            const newWorkInfo = [...prevState];
            newWorkInfo[index] = {
                ...newWorkInfo[index],
                [id]: value
            };
            return newWorkInfo;
        });
    }

    function addWorkSection() {
        setWorkInfo(prevState => [
            ...prevState,
            {
                id: v1(),
                employer: '',
                title: '',
                startDate: '',
                endDate: '',
                description: ''
            }
        ]);
    }

    function removeWorkSection(index) {
        setWorkInfo(prevState => {
            const newWorkInfo = [...prevState];
            newWorkInfo.splice(index, 1);
            return newWorkInfo;
        })
    }

    return (
        <>
          <div className="inputs-block">
            <h3>Work Information</h3>
            {workInfo.map((job, index) => (
              <div key={job.id} className="inputs-block">
                <InfoInput 
                  id={`employer-${index}`}
                  label="Employer:"
                  onChange={(value) => handleChanges(index, 'employer', value)}
                />
                <InfoInput 
                  id={`title-${index}`}
                  label="Title:"
                  onChange={(value) => handleChanges(index, 'title', value)}
                />
                <InfoInput 
                  id={`startDate-${index}`}
                  label="Start Date:"
                  onChange={(value) => handleChanges(index, 'startDate', value)}
                />
                <InfoInput 
                  id={`endDate-${index}`}
                  label="End Date:"
                  onChange={(value) => handleChanges(index, 'endDate', value)}
                />
                <div className="job-description-text-area">
                  <label htmlFor={`job-description-${index}`}>Description:</label>
                  <textarea 
                    type="text" 
                    name="job-description" 
                    id={`job-description-${index}`} 
                    maxLength="150" 
                    onChange={(event) => handleChanges(index, 'description', event.target.value)}></textarea>
                </div>
                <button type="button" id="remove-work-button" onClick={() => removeWorkSection(index)}>Remove Job</button>
              </div>
            ))}
            <button type="button" id="add-work-button" onClick={addWorkSection}>Add Job</button>
          </div>
        </>
    )
}