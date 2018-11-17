import React from "react";

import "./Input.css";

const Input = ({ children, style, ...props }) => (
  <input className="input" {...props} />
);

export default Input;
