import { createContext, useContext } from "react";

export const UserContext = createContext({
  user: null,
  updateUser: () => {},
  logOut: () => {},
});

export function useUserContext() {
  const { user, updateUser, logOut } = useContext(UserContext);

  return { user, updateUser, logOut };
}
