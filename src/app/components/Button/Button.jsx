import React from "react";

import "./Button.css";

export default ({ children, type, style, btnStyle, onClick }) => {
  return (
    <button
      {...{ type, style }}
      onClick={onClick}
      className={["button", btnStyle].join(" ")}
    >
      {children}
    </button>
  );
};
