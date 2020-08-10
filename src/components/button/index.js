import React from "react";
import styles from "./index.module.css";

const Button = ({ name, type, onClick }) => {
  return (
    <button
      className="btn btn-primary btn-lg"
      id={styles.btn}
      tag="button"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
