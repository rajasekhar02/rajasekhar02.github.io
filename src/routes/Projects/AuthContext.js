import React from "react";
import SplitwiseAuth from "./Splitwise/auth";

let AuthContext = React.createContext({
  isAuthenticated: false,
  signIn: undefined,
  signOut: undefined,
  user: undefined,
  setUser: undefined
});
export const AuthProvider = function ({ children }) {
  let [user, setUser] = React.useState(undefined);
  let [isAuthenticated, setIsAuthenticated] = React.useState(
    SplitwiseAuth.authStatus()
  );
  let signIn = async (code) => {
    await SplitwiseAuth.signIn(code);
    setIsAuthenticated(SplitwiseAuth.authStatus());
    return true;
  };

  let signOut = () => {
    SplitwiseAuth.signOut();
    setIsAuthenticated(SplitwiseAuth.authStatus());
  };

  let value = {
    isAuthenticated,
    signIn,
    signOut,
    setUser,
    user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = function () {
  return React.useContext(AuthContext);
};
export default {
  AuthProvider,
  useAuth
};
