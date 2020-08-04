import React from "react";
import styles from "./index.module.css";
import Button from "../button";

const Book = ({ title, subtitle, author, imageUrl, details }) => {
  return (
    <div className={styles["col-lg-4"]}>
      <h2 className="card-header">{title}</h2>
      <div className="card-body">
        <h3 className="card-title">{subtitle}</h3>
        <h4 className="card-title">Author: {author}</h4>
      </div>
      <img className={styles.image} src={imageUrl} alt="Book Image" />
      <br />
      <Button id={styles.lead} name="VIEW DETAILS" />
    </div>
  );
};

export default Book;
