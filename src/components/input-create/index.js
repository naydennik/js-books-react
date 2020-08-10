import React from "react";

const InputCreate = ({
  title,
  id,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <h4>{title}</h4>
      <input
        className="form-control"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputCreate;
