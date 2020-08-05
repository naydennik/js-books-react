import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserContext from "./config/context";
import { useState } from "react";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
