export default function InfoInput({ label, id, value, placeholder, onChange }) {

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
              maxLength="30"
              onChange={handleChange}
            />
          </label>
        </div>
    )
}