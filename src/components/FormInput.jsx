import React, { useState } from "react";
import "./form.css";

const FormInput = ({ label, onChange, options, ...inputProps }) => {
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
    </div>
  );
};

export default FormInput;
