import { createContext } from "react";
import useUserProvider from "../hooks/UserProvider";

const UserContext = createContext({});

export function UserProvider(props) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
