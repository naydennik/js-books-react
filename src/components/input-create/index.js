import React from "react";

const InputCreate = ({
  title,
  id,
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
  onBlur,
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
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputCreate;
