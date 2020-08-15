import React from "react";

const UserContext = React.createContext({
  logged: false,
  user: null,
});

export default UserContext;
