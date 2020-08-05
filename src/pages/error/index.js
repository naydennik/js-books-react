import React from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className="container">
          <div className="row text-center">
            <div className={styles["error-main"]}>
              <div className="error-main">
                <h1>404</h1>
                <h2>Page not found</h2>
              </div>
              <Link to="/">
                <Button id={styles.button} name="TAKE ME HOME" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
