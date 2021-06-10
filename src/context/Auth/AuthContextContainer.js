import { Auth, Hub } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "./AuthContext";

const AuthContextContainer = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let fetchUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setUser(getCurrentUser());
      } catch (error) {
        console.log("error in fetching user");
        setUser({});
      }
    };
    Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signIn":
          fetchUser();
          break;
        case "signOut":
          fetchUser();
          break;
        default:
          break;
      }
    });
    fetchUser();
  }, []);

  const checkAuthentication = () => {
    return !!Auth.user;
  };

  const getCurrentUser = () => {
    return Auth.user;
  };

  const logOut = () => {
    Auth.signOut();
  };

  return (
    <AuthContextProvider
      value={{
        user,
        checkAuthentication,
        getCurrentUser,
        logOut,
      }}
    >
      {children}
    </AuthContextProvider>
  );
};

export default AuthContextContainer;
