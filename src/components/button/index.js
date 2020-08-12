import React from "react";
import styles from "./index.module.css";

const Button = ({ name, type, onClick, id }) => {
  return (
    <button
      className="btn btn-primary btn-lg"
      id={id}
      tag="button"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
