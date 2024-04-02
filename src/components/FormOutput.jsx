import React, { useState } from "react";
import "./formInput.css";

const FormOutput = ({ value, id }) => {

  return (
    <div className="formInput">
        {id == 1 ? (<p> {value} <label> % </label> </p>) : (<p> {value} <label> EUR </label> </p>)}
    </div>
  );
};

export default FormOutput;
