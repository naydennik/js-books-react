import React, { useState } from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import Button from "../../components/button";
import auth from "../../services/authService";
import { useHistory } from "react-router-dom";
import registerValidator from "../../services/registerValidator";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!registerValidator(username, password, rePassword)) {
      return;
    } else {
      auth
        .register({ username, password })
        .then(() => {
          history.push("/books");
        })
        .catch((err) => {
          toast.error(err);
          return;
        });
    }
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
            label="Username*"
            id="username"
            placeholder="Please enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <ToastContainer />
          <Input
            type="password"
            label="Password*"
            id="password"
            placeholder="Please enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />

          <Input
            type="password"
            label="Re-confirm Password*"
            id="rePassword"
            placeholder="Please repeat the password..."
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required={true}
          />
          <Button name="REGISTER" type="submit" onClick={() => {}} />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterPage;
