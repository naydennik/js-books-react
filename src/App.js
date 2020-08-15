import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserContext } from "./config/context";
import { useState } from "react";

const App = (props) => {
  const [user, setUser] = useState(null);

  const updateUser = (params) => {
    return setUser(params);
  };

  const logOut = () => {
    return setUser(null);
  };

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username !== user) {
      setUser(username);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, updateUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
