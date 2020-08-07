import React from "react";

const Input = ({ type, label, id, placeholder, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
