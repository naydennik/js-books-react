import React from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <form id={styles.form}>
        <div class="col-md-4">
          <br />
          <br />
          <h1>Login Form</h1>
          <br />
          <Input
            type="text"
            label="Username"
            id="username"
            value="Please enter your Username"
            onChange=""
          />
          <Input
            type="paswword"
            label="Password"
            id="password"
            value="Please enter your Password"
            onChange=""
          />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
