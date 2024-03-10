import { useState, useEffect } from 'react'
import { v1 } from 'uuid'
import InfoInput from './input'
import '../styles/main.css'

export default function WorkInfo({ workInfo, setWorkInfo }) {

    const [formData, setFormData] = useState([...workInfo])
    const [editMode, setEditMode] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [showInputs, setShowInputs] = useState(true);

    useEffect(() => {
      setFormData([...workInfo]);
    }, [workInfo]);

    function handleChanges(index, id, value) {
        setFormData(prevData => {
            const newWorkInfo = [...prevData];
            newWorkInfo[index] = {
                ...newWorkInfo[index],
                [id]: value
            };
            return newWorkInfo;
        });
    }

    function handleSubmit() {
      setWorkInfo(formData);
      setEditMode(false);
    }

    function editForm() {
      setEditMode(true);
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
        setEditMode(true);
        buttonsActive = true;
        toggleButtonDisplay();
    }

    function removeWorkSection(index) {
        setWorkInfo(prevState => {
            const newWorkInfo = [...prevState];
            newWorkInfo.splice(index, 1);
            if (newWorkInfo.length === 0) {
              buttonsActive = false;
              toggleButtonDisplay();
            }
            return newWorkInfo;
        })
    }

    let buttonsActive = false;
    function toggleButtonDisplay() {
      const buttons = document.querySelector('.work-buttons');
      if (buttonsActive) {
        buttons.style.display = 'flex';
      } else {
        buttons.style.display = 'none';
      }
    }

    function handleVisibleChange() {
      setIsVisible(!isVisible);
      setEditMode(false);
    }

    useEffect(() => {
      if (isVisible) {
        const timeout = setTimeout(() => {
          setShowInputs(isVisible);
        }, 500);
        return () => clearTimeout(timeout);
      } else {
        setShowInputs(false);
      }
    }, [isVisible]);

    return (
        <>
          <div className="inputs-block">
            <div className="inputs-header">
              <div className="input-block-title">Work Information</div>
              <span className="toggle-visibility" onClick={handleVisibleChange}>{ isVisible ? 'Hide' : 'Show' }</span>
            </div>
            <div className="input-component" style={{ maxHeight: isVisible ? '100vh' : '0px', overflow: showInputs ? 'visible' : 'hidden' }}>
              {workInfo.map((job, index) => (
                <div key={job.id} className="inputs-block">
                  <InfoInput 
                    id={`employer-${index}`}
                    label="Employer:"
                    disabled={!editMode}
                    onChange={(value) => handleChanges(index, 'employer', value)}
                  />
                  <InfoInput 
                    id={`title-${index}`}
                    label="Title:"
                    disabled={!editMode}
                    onChange={(value) => handleChanges(index, 'title', value)}
                  />
                  <InfoInput 
                    id={`startDate-${index}`}
                    label="Start Date:"
                    disabled={!editMode}
                    onChange={(value) => handleChanges(index, 'startDate', value)}
                  />
                  <InfoInput 
                    id={`endDate-${index}`}
                    label="End Date:"
                    disabled={!editMode}
                    onChange={(value) => handleChanges(index, 'endDate', value)}
                  />
                  <div className="job-description-text-area">
                    <label htmlFor={`job-description-${index}`}>Description:</label>
                    <textarea 
                      type="text" 
                      name="job-description" 
                      id={`job-description-${index}`} 
                      maxLength="150"
                      disabled={!editMode}
                      onChange={(event) => handleChanges(index, 'description', event.target.value)}></textarea>
                  </div>
                  <button type="button" id="remove-work-button" onClick={() => removeWorkSection(index)}>Remove</button>
                </div>
              ))}
                <div className="buttons-container work-buttons">
                  <button type="button" id="submit-work-button" className="submit-button" onClick={handleSubmit}>Submit</button>
                  <button type="button" id="edit-work-button" className="edit-button" onClick={editForm}>Edit</button>
                </div>
              <button type="button" id="add-work-button" className="add-section-button" onClick={addWorkSection}>Add Job</button>
            </div>
          </div>
        </>
    )
}