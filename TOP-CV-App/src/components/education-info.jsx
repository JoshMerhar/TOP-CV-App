import { useState, useEffect } from 'react'
import { v1 } from 'uuid'
import InfoInput from './input'
import '../styles/main.css'

export default function EducationInfo({ educationInfo, setEducationInfo }) {

    const [formData, setFormData] = useState([...educationInfo])
    const [editMode, setEditMode] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      setFormData([...educationInfo]);
    }, [educationInfo]);

    function handleChanges(index, id, value) {
        setFormData(prevData => {
          const newEducationInfo = [...prevData]; 
          newEducationInfo[index] = {
            ...newEducationInfo[index],
            [id]: value
          };
          return newEducationInfo;
      });
    }

    function handleSubmit() {
      setEducationInfo(formData);
      setEditMode(false);
    }

    function editForm() {
      setEditMode(true);
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
      setEditMode(true);
      buttonsActive = true;
      toggleButtonDisplay();
    }

    function removeEducationSection(index) {
      setEducationInfo(prevState => {
        const newEducationInfo = [...prevState];
        newEducationInfo.splice(index, 1);
        if (newEducationInfo.length === 0) {
          buttonsActive = false;
          toggleButtonDisplay();
        }
        return newEducationInfo;
      });
    }

    let buttonsActive = false;
    function toggleButtonDisplay() {
      const buttons = document.querySelector('.education-buttons');
      if (buttonsActive) {
        buttons.style.display = 'flex';
      } else {
        buttons.style.display = 'none';
      }
    }

    function handleVisibleChange() {
      setIsVisible(!isVisible);
    }

    return (
      <>
        <div className="inputs-block">
          <div className="inputs-header">
            <div className="input-block-title">Education Information</div>
            <span className="toggle-visibility" onClick={handleVisibleChange}>{ isVisible ? 'Hide' : 'Show' }</span>
          </div>
          {educationInfo.map((education, index) => (
            <div key={education.id} className="inputs-block" style={{ display: isVisible ? 'flex' : 'none' }}>
              <InfoInput
                id={`school-${index}`}
                label="School:"
                disabled={!editMode}
                onChange={(value) => handleChanges(index, 'school', value)}
              />
              <InfoInput
                id={`degree-${index}`}
                label="Degree:"
                disabled={!editMode}
                onChange={(value) => handleChanges(index, 'degree', value)}
              />
              <InfoInput
                id={`fromYear-${index}`}
                label="From:"
                placeholder="Start Year"
                disabled={!editMode}
                onChange={(value) => handleChanges(index, 'fromYear', value)}
              />
              <InfoInput
                id={`toYear-${index}`}
                label="To:"
                placeholder="End Year"
                disabled={!editMode}
                onChange={(value) => handleChanges(index, 'toYear', value)}
              />
              <button type="button" id="remove-education-button" onClick={() => removeEducationSection(index)}>Remove</button>
            </div>
          ))}
          <div className="input-component" style={{ display: isVisible ? 'flex' : 'none' }}>
            <div className="buttons-container education-buttons">
              <button type="button" id="submit-education-button" className="submit-button" onClick={handleSubmit}>Submit</button>
              <button type="button" id="edit-education-button" className="edit-button" onClick={editForm}>Edit</button>
            </div>
            <button type="button" id="add-education-button" className="add-section-button" onClick={addEducationSection}>Add Education</button>
          </div>
        </div>
      </>
    )
}