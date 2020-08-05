import React, { useState } from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import Button from "../../components/button";
import auth from "../../services/authService";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      window.alert("Please enter Username and Password!");
    }

    if (password !== rePassword) {
      window.alert("Password and Re-Password don't match!");
    }

    auth.register({ username, password, imageUrl }).then((res) => {
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
          <h1>Register Form</h1>
          <br />
          <Input
            type="text"
            label="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Re-confirm Password"
            id="rePassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Input
            type="text"
            label="Image URL"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => {
              if (e.target.value === undefined || e.target.value === "") {
                setImageUrl(
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                );
              } else {
                setImageUrl(e.target.value);
              }
            }}
          />
          <Button
            id={styles.button}
            name="REGISTER"
            type="submit"
            onClick={() => {}}
          />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterPage;
