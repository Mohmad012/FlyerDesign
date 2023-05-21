import React, { useRef } from "react";
import { useEffect } from "react";

const OtpInputs = ({ values, handleChange }) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const handleInput = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      handleChange([...values.slice(0, index), value, ...values.slice(index + 1)]);
      if (value !== "" && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && values[index] === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    const pastedValues = pastedText.split("").filter((char) => !isNaN(char)).slice(0, 4);
    const newValues = [...values];
    for (let i = 0; i < pastedValues.length; i++) {
      if (i < inputRefs.length) {
        newValues[i] = pastedValues[i];
      }
    }
    handleChange(newValues);
  };

  return (
    <>
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="text"
          maxLength={1}
          value={values[index]}
          onChange={(e) => handleInput(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 mx-2 text-lg text-center font-semibold border-none ring-1 ring-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      ))}
    </>
  );
};

export default OtpInputs;