import InfoInput from './input'
import DisplayInfo from './display-info'
import '../styles/main.css'

export default function GeneralInfo({ genInfo, setGenInfo }) {

    function handleChanges(id, value) {
      setGenInfo(prevState => ({
        ...prevState,
        [id]: value
      }));
    }

    let inputsLocked = false;
    function toggleLock() {
      const lockButton = document.getElementById('lock-general-button');
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      
      if (!inputsLocked) {
        inputsLocked = true;
        firstName.disabled = true;
        lastName.disabled = true;
        email.disabled = true;
        phone.disabled = true;
        lockButton.textContent = 'Unlock Section';
      } else {
        inputsLocked = false;
        firstName.disabled = false;
        lastName.disabled = false;
        email.disabled = false;
        phone.disabled = false;
        lockButton.textContent = 'Lock Section';
      }
    }

    return (
        <>
          <div className="inputs-block">
            <h3>General Information</h3>
            <InfoInput 
              id="firstName"
              label="First Name:"
              onChange={handleChanges}
            />
            <InfoInput
              id="lastName"
              label="Last Name:"
              onChange={handleChanges}
            />
            <InfoInput
              id="email"
              label="Email:"
              placeholder='person@place.com'
              onChange={handleChanges}
            />
            <InfoInput 
              id="phone"
              label="Phone Number:"
              placeholder='555-555-5555'
              onChange={handleChanges}
            />
            <button type="button" id="lock-general-button" onClick={toggleLock}>Lock</button>
          </div>
        </>
    )
}