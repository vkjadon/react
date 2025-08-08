// src/components/SumForm.jsx
import { useState } from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

function SumForm() {
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [sum, setSum] = useState(null)
  const [error, setError] = useState('')

  const isValidNumber = (val) => !isNaN(val) && val.trim() !== ''

  const handleAdd = () => {
    if (!isValidNumber(firstNum) || !isValidNumber(secondNum)) {
      setError('Please enter valid numbers in both fields.')
      setSum(null)
    } else {
      setSum(parseFloat(firstNum) + parseFloat(secondNum))
      setError('')
    }
  }

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <InputField
        placeholder="First Number"
        value={firstNum}
        onChange={(e) => setFirstNum(e.target.value)}
      />
      <InputField
        placeholder="Second Number"
        value={secondNum}
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <div>
        <SubmitButton onClick={handleAdd} label="ADD" />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  )
}

export default SumForm
