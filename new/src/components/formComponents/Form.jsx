import './form.css'
import { useState } from 'react';
import TextInput from './InputField';
import TextArea from './TextArea';
import SelectInput from './SelectInput';
import InputField from './InputField';


function Form() {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    gender: '',
    country: 'India',
    hobbies: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <InputField
        label="Name:"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextArea
        label="Bio:"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      
      <SelectInput
        label="Country:"
        name="country"
        value={formData.country}
        onChange={handleChange}
        options={['India', 'USA', 'Germany']}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
