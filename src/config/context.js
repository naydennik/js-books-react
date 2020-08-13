import React from "react";

export const UserContext = React.createContext({
  user: null,
  logged: false,
  loggedIn: () => {},
  loggedOut: () => {},
});
