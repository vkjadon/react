function SelectInput({ label, className, name, value, onChange, options }) {
  return (
    <div>
      <label>{label}</label>
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
