import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserContext } from "./config/context";
import { useState } from "react";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = (a, b, c) => {
    setUser(a);
    setId(b);
    setToken(c);
  };

  const logOut = () => {
    setUser(null);
    setId(null);
    setToken(null);
  };

  useEffect(() => {
    const authtoken = sessionStorage.getItem("authtoken");
    const username = sessionStorage.getItem("username");
    const id = sessionStorage.getItem("id");
    if (authtoken !== token) {
      setUser(username);
      setId(id);
      setToken(authtoken);
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, id, token, updateUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
