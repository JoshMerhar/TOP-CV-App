export default function InfoInput({ label, id, value, placeholder, disabled, onChange }) {

    function handleChange(event) {
      onChange(event.target.value);
    }

    return (
        <div>
          <label>
            {label}
            {' '}
            <input 
              type="text"
              id={id}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              maxLength="30"
              onChange={handleChange}
            />
          </label>
        </div>
    )
}