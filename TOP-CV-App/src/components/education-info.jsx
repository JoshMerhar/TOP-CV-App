import InfoInput from './input'
import '../styles/main.css'

export default function EducationInfo({ educationInfo, setEducationInfo }) {

    function handleChanges(id, value) {
        setEducationInfo(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    let inputsLocked = false;
    function toggleLock() {
        const lockButton = document.getElementById('lock-education-button');
        const school = document.getElementById('school');
        const degree = document.getElementById('degree');
        const fromYear = document.getElementById('fromYear');
        const toYear = document.getElementById('toYear');

        if (!inputsLocked) {
            inputsLocked = true;
            school.disabled = true;
            degree.disabled = true;
            fromYear.disabled = true;
            toYear.disabled = true;
        } else {
            inputsLocked = false;
            school.disabled = false;
            degree.disabled = false;
            fromYear.disabled = false;
            toYear.disabled = false;
        }
    }

    return (
        <>
          <div className="inputs-block">
            <h3>Education Information</h3>
            <InfoInput
              id="school"
              label="School:"
              onChange={handleChanges}
            />
            <InfoInput
              id="degree"
              label="Degree:"
              onChange={handleChanges}
            />
            <InfoInput
              id="fromYear"
              label="From:"
              placeholder="Start Year"
              onChange={handleChanges}
            />
            <InfoInput
              id="toYear"
              label="To:"
              placeholder="End Year"
              onChange={handleChanges}
            />
            <button type="button" id="lock-education-button" onClick={toggleLock}>Lock</button>
          </div>
        </>
    )
}