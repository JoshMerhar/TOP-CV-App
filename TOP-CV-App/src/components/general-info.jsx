import { useState } from 'react'
import InfoInput from './input'
import '../styles/main.css'

export default function GeneralInfo({ genInfo, setGenInfo }) {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: ''  })
    const [editMode, setEditMode] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    function handleChanges(id, value) {
      setFormData(prevData => ({
        ...prevData,
        [id]: value
      }));
    }

    function handleSubmit() {
      setGenInfo(formData);
      setEditMode(false);
    }

    function editForm() {
      setEditMode(true);
    }

    function handleVisibleChange() {
      setIsVisible(!isVisible);
    }

    return (
        <>
          <div className="inputs-block">
            <div className="inputs-header">
              <div className="input-block-title">General Information</div>
              <span className="toggle-visibility" onClick={handleVisibleChange}>{ isVisible ? 'Hide' : 'Show' }</span>
            </div>
            <div className="input-component" style={{ display: isVisible ? 'block' : 'none' }}>
              <InfoInput 
                id="firstName"
                label="First Name:"
                disabled={!editMode}
                onChange={(value) => handleChanges('firstName', value)}
              />
            </div>
            <div className="input-component" style={{ display: isVisible ? 'block' : 'none' }}>
              <InfoInput
                id="lastName"
                label="Last Name:"
                disabled={!editMode}
                onChange={(value) => handleChanges('lastName', value)}
              />
            </div>
            <div className="input-component" style={{ display: isVisible ? 'block' : 'none' }}>
              <InfoInput
                id="email"
                label="Email:"
                placeholder='person@place.com'
                disabled={!editMode}
                onChange={(value) => handleChanges('email', value)}
              />
            </div>
            <div className="input-component" style={{ display: isVisible ? 'block' : 'none' }}>
              <InfoInput 
                id="phone"
                label="Phone Number:"
                placeholder='555-555-5555'
                disabled={!editMode}
                onChange={(value) => handleChanges('phone', value)}
              />
            </div>
            <div className="input-component" style={{ display: isVisible ? 'block' : 'none' }}>
              <div className="buttons-container">
                <button type="button" id="submit-general-button" className="submit-button" onClick={handleSubmit}>Submit</button>
                <button type="button" id="edit-general-button" className="edit-button" onClick={editForm}>Edit</button>
              </div>
            </div>
          </div>
        </>
    )
}