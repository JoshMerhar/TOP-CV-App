export default function InfoInput({ id, label, placeholder, onChange }) {

    return (
        <div>
          <label>
            {label}
            {' '}
            <input 
              id={id}
              type="text"
              placeholder={placeholder}
              maxLength="30"
              onChange={(e) => onChange(id, e.target.value)}
            />
          </label>
        </div>
    )
}