import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import config from "../../config/config";
import Button from "../../components/button";
import Header from "../../components/header";
import Footer from "../../components/footer";

const DetailsPage = () => {
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("id") === config.adminId) {
      setisAdmin(true);
    }
  }, []);
  return (
    <div>
      <Header />
      <div id={styles.container}>
        <div className="col-lg-4">
          <h3 className="card-header">Title</h3>
          <div className="card-body">
            <h4 className="card-title">Subtitle</h4>
            <h4 className="card-title">Author: ...........</h4>
          </div>
          <img className={styles.image} src="image URL" alt="Book Title" />
          <div className="card-body">
            <p className="card-text">Book description</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ISBN: ................</li>
            <li className="list-group-item">Publisher: ................</li>
            <li className="list-group-item">Piblished on: ................</li>
            <li className="list-group-item">Pages: .................</li>
            <li className="list-group-item">
              <a href="website">Book's website link</a>
            </li>
          </ul>
          {isAdmin ? <Button name="EDIT" /> : null}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailsPage;
