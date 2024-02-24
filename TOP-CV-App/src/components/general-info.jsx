import { useState } from 'react';

export default function GeneralInfo() {
    const [genInfo, setGenInfo] = useState({ firstName: '', lastName: '', email: '', phone: '' });

    function handleChanges() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        setGenInfo({ firstName, lastName, email, phone });
    }

    return (
        <>
          <div className="general-info-inputs">
            <NameInput 
              id="first-name"
              label="First Name:"
              placeholder="Someone"
            />
            <NameInput
              id="last-name"
              label="Last Name:"
              placeholder="Something"
            />
            <EmailInput
              id="email"
              label="Email:"
            />
            <PhoneInput 
              id="phone"
              label="Phone Number:"
            />
            <button onClick={handleChanges}>Submit</button>
          </div>
          <div className="general-info-display">
            <h2>{genInfo.firstName} {genInfo.lastName}</h2>
            <h3>Email: {genInfo.email}</h3>
            <h3>Phone: {genInfo.phone}</h3>
          </div>
        </>
    )
}

function NameInput({ id, label, placeholder }) {

    return (
        <div>
          <label>
            {label}
            {' '}
            <input 
              id={id}
              type='text'
              placeholder={placeholder}
            />
          </label>
        </div>
    )
}

function EmailInput({ id, label }) {

    return (
        <div>
          <label>
            {label}
            {' '}
            <input 
              id={id}
              type='email'
              placeholder='person@place.com'
            />
          </label>
        </div>
    )
}

function PhoneInput({ id, label }) {

    return (
        <div>
          <label>
            {label}
            {' '}
            <input 
              id={id}
              type='tel'
              placeholder='555-555-5555'
            />
          </label>
        </div>
    )
}