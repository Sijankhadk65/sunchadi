import React from "react";
import cuid from "cuid";

import "./TextInput.css";

const id = cuid();

export default ({ input, width, type, label, meta: { touched, error } }) => {
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={input.name}
        type={type}
        width={width}
        value={input.value}
        autoComplete="off"
        className="input" 
        onChange={input.onChange}
      />
      {touched && error && <p className="error">{error}</p>}
    </div>
  );
};
