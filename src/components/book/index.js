import React from "react";
import styles from "./index.module.css";
import Button from "../button";
import { useHistory } from "react-router-dom";

const Book = ({ title, subtitle, author, imageUrl, id }) => {
  const history = useHistory();
  return (
    <div className="col-auto mb-3 ">
      <div className="card" id={styles.col}>
        <div className="card-body">
          <h2 className="card-title" id={styles.title}>
            {title}
          </h2>
          <hr />
          <br></br>
          <h3 className="card-subtitle mb-3 text-muted">{subtitle}</h3>
          <h4 className="card-title">Author: {author}</h4>
        </div>
        <img className="rounded" id={styles.image} src={imageUrl} alt={title} />
        <br />
        <Button
          name="VIEW DETAILS"
          onClick={() => {
            history.push(`/details/${id}`);
          }}
        />
      </div>
    </div>
  );
};

export default Book;
