function TextArea({ label, className, name, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <textarea 
        className={className} 
        name={name} 
        value={value} 
        onChange={onChange}
    />
    </>
  );
}

export default TextArea;
