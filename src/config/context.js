import { createContext, useContext } from "react";

export const UserContext = createContext({
  user: null,
  id: null,
  token: null,
  updateUser: () => {},
  logOut: () => {},
});

export function useUserContext() {
  const { user, id, token, updateUser, logOut } = useContext(UserContext);

  return { user, id, token, updateUser, logOut };
}
