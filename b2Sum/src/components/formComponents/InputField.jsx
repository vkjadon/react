// src/components/InputField.jsx

import './form.css';

function InputField({ placeholder, value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputField
