import React from "react";

import "./Button.css";

export default ({ children, type, style, btnStyle, onClick }) => {
  return (
    <button
      className={["button", btnStyle].join(" ")}
      {...{ type, style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
