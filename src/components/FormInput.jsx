import React, { useState } from "react";
import "./formInput.css";

const FormInput = ({ label, errorMessage, onChange, id, options, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {options ? (
        <select {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
