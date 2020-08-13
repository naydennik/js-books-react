import React, { useState, useContext } from "react";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";
import Button from "../../components/button";
import auth, { loginUser } from "../../services/authService";
import { useHistory, Link } from "react-router-dom";
import loginValidator from "../../services/loginValidator";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loginValidator(username, password)) {
      return;
    } else {
      auth
        .login({ username, password })
        .then((res) => {
          loginUser({
            username: res.data.username,
            authtoken: res.data._kmd.authtoken,
            id: res.data._id,
          });
        })
        .then(() => {
          window.alert("Successfully logged in!");
          history.push("/books");
        })
        .catch((err) => {
          toast.error(
            "Something went wrong ): Please try again with the correct username and password!",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          console.error(err);
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
          <ToastContainer />
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

        <p id={styles.register}>Don't have an account? Please register!</p>
        <Link to="/register">
          <button className="btn btn-primary" id={styles.regBtn}>
            REGISTER
          </button>
        </Link>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
