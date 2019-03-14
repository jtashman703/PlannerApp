import React from "react";

export const FormBtn = props => (
  <button {...props} className="btn submit-btn">
    {props.children}
  </button>
);