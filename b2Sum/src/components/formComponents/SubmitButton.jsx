// src/components/SubmitButton.jsx

function SubmitButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default SubmitButton
