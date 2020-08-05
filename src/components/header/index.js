import React, { useState } from "react";
import styles from "./index.module.css";
import auth from "../../services/authService";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState("dropdown-menu");
  const { isAdmin, logout } = auth;
  const history = useHistory();

  const toggle = (e) => {
    e.preventDefault();
    dropdown === "dropdown-menu"
      ? setDropdown("dropdown-menu show")
      : setDropdown("dropdown-menu");
  };

  const handleLogout = () => {
    return logout().then(() => {
      history.push("/");
    });
  };

  const username = sessionStorage.getItem("username");

  return (
    <div className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          JS Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            {!username ? (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    LOGIN <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    REGISTER
                  </a>
                </li>{" "}
              </>
            ) : (
              <li className="nav-item">
                <p className="nav-link" role="button" onClick={handleLogout}>
                  LOGOUT
                </p>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/about">
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown show">
              <p
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href=""
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={(e) => toggle(e)}
              >
                BOOKS
              </p>
              <div className={dropdown} x-placement="bottom-start">
                <a className="dropdown-item" href="/books">
                  ALL BOOKS
                </a>

                {isAdmin ? (
                  <>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/create">
                      CREATE BOOK
                    </a>
                  </>
                ) : null}
              </div>
            </li>
          </ul>
          {username ? (
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="navbar-nav">
                <p className="navbar-brand">Hello, {username}</p>
              </li>
              <li className="nav-item avatar">
                <p className="nav-link p-0">
                  <img
                    src="/profile.png"
                    className="rounded-circle z-depth-0"
                    alt=""
                    height="35"
                  />
                </p>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Header;
