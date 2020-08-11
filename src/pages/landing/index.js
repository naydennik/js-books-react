import React from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const LandingPage = () => {
  const username = sessionStorage.getItem("username");
  return (
    <div>
      <Header />
      <div className="jumbotron">
        <h1 className="display-3">Hello, JavaScript!</h1>
        <p className="lead">This is a simple app for JavaScript books.</p>
        <hr className="my-4" />
        {!username ? (
          <>
            <p>If you want to look at the collection please login!</p>
            <Link to="/login">
              <button className="btn btn-primary" id={styles.regBtn}>
                Login
              </button>
            </Link>
            <hr className="my-4" />
            <p>Don't have an account? Please register!</p>
            <Link to="/register">
              <button className="btn btn-primary" id={styles.regBtn}>
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <p>Take a tour to the JavaScript books collection!</p>
            <Link to="/books">
              <Button name="TAKE ME TO BOOKS" />
            </Link>{" "}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
