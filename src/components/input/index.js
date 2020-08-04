import React from "react";

const Input = ({ type, label, id, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
