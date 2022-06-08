import React from "react";
import SplitwiseAuth from "./Splitwise/auth";
let AuthContext = React.createContext({
  isAuthenticated: false,
  setUser: undefined,
  signIn: undefined,
  signOut: undefined,
  user: undefined
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
    setUser,
    signIn,
    signOut,
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
