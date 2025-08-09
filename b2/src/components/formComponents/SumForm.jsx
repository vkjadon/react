// src/components/SumForm.jsx

import { useState } from "react";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function SumForm() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [sum, setSum] = useState(null);

  function isValidNumber(val) {
    if (!isNaN(val)) return true;
    else false;
  }

  const handleAdd = () => {
    if (
      isValidNumber(firstNum) &&
      isValidNumber(secondNum)
    )
      setSum(parseFloat(firstNum) + parseFloat(secondNum));
    else setSum("Error! Enter a Valid Number");
  };

  return (
    <>
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

        <SubmitButton onClick={handleAdd} label="ADD" />
      </div>
      <div>
        <p>Sum :{sum}</p>
      </div>
    </>
  );
}

export default SumForm;
