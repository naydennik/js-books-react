import React from "react";

const Textarea = ({
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
      <textarea
        className="form-control"
        rows="5"
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

export default Textarea;
