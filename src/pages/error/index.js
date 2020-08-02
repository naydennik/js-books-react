import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="container py-5 ">
        <div className="row h-100 align-items-center ">
          <div className="col-lg-6">
            <h1 className="display-1">Oops!</h1>
            <div className="lead text-muted mb-0">
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className={styles.button}>
                <Link to="/">
                  <button
                    type="button"
                    id="button"
                    className="btn btn-primary btn-lg"
                  >
                    TAKE ME HOME!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
