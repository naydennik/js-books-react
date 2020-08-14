import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserContext from "./config/context";
import { useState } from "react";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider value={{ user, logged }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
