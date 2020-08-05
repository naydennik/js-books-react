import React from "react";

const Button = ({ id, name, type, onClick }) => {
  return (
    <button
      className="btn btn-primary"
      tag="button"
      id={id}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
