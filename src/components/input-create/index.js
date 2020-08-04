import React from "react";

const InputCreate = ({ title, id, type, placeholder, name }) => {
  return (
    <div className="form-group">
      <h4>{title}</h4>
      <input
        className="form-control"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputCreate;
