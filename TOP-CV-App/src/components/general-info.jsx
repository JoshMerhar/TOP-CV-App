import { useState } from 'react'
import InfoInput from './input'
import '../styles/main.css'

export default function GeneralInfo({ genInfo, setGenInfo }) {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: ''  })
    const [editMode, setEditMode] = useState(true);

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

    return (
        <>
          <div className="inputs-block">
            <h3>General Information</h3>
            <InfoInput 
              id="firstName"
              label="First Name:"
              disabled={!editMode}
              onChange={(value) => handleChanges('firstName', value)}
            />
            <InfoInput
              id="lastName"
              label="Last Name:"
              disabled={!editMode}
              onChange={(value) => handleChanges('lastName', value)}
            />
            <InfoInput
              id="email"
              label="Email:"
              placeholder='person@place.com'
              disabled={!editMode}
              onChange={(value) => handleChanges('email', value)}
            />
            <InfoInput 
              id="phone"
              label="Phone Number:"
              placeholder='555-555-5555'
              disabled={!editMode}
              onChange={(value) => handleChanges('phone', value)}
            />
            <div className="buttons-container">
              <button type="button" id="submit-general-button" onClick={handleSubmit}>Submit</button>
              <button type="button" id="edit-general-button" onClick={editForm}>Edit</button>
            </div>
          </div>
        </>
    )
}