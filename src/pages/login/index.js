import React, { useState } from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import Button from "../../components/button";
import auth from "../../services/authService";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      window.alert("Please enter Username and Password!");
    }

    auth.login({ username, password }).then(() => {
      history.push("/books");
    });
  };

  return (
    <div>
      <Header />
      <form id={styles.form} onSubmit={handleSubmit}>
        <div className="col-md-4">
          <br />
          <br />
          <h1>Login Form</h1>
          <br />
          <Input
            type="text"
            label="Username"
            id="username"
            placeholder="Please enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            placeholder="Please enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <Button name="LOGIN" type="submit" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
