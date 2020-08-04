import React from "react";

const Button = ({ id, name }) => {
  return (
    <button className="btn btn-primary" tag="button" id={id}>
      {name}
    </button>
  );
};

export default Button;
