import React from "react";
import styles from "./index.module.css";
import Button from "../button";
import { useHistory } from "react-router-dom";

const Book = ({ title, subtitle, author, imageUrl, id }) => {
  const history = useHistory();
  return (
    <div className="col-lg-4" id={styles.col}>
      <h2 className="card-header">{title}</h2>
      <div className="card-body">
        <h3 className="card-title">{subtitle}</h3>
        <h4 className="card-title">Author: {author}</h4>
      </div>
      <img className={styles.image} src={imageUrl} alt={title} />
      <br />
      <Button
        name="VIEW DETAILS"
        onClick={() => {
          history.push(`/details/${id}`);
        }}
      />
    </div>
  );
};

export default Book;
