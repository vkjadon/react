// src/components/SubmitButton.jsx
function SubmitButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
    >
      {label}
    </button>
  )
}

export default SubmitButton
