import React from "react";

const Button = ({ name, type, onClick }) => {
  return (
    <button
      className="btn btn-primary btn-lg"
      tag="button"
      id="button"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
