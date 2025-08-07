// src/components/InputField.jsx
function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ margin: '0.5rem', padding: '0.5rem', fontSize: '1rem' }}
    />
  )
}

export default InputField
