function InputField({ label, className, placeHolder, type, name, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input 
        className={className}
        placeholder={placeHolder}
        type={type}
        name={name} 
        value={value} 
        onChange={onChange} 
    />
    </>
  );
}

export default InputField;
