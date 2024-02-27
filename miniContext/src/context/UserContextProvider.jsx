import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = React.useState(null);
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
