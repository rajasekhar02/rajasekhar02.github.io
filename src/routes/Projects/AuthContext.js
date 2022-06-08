import React from "react";
import SplitwiseAuth from "./Splitwise/auth";
let AuthContext = React.createContext({
  user: undefined,
  isAuthenticated: false,
  signIn: undefined,
  signOut: undefined
});
export const AuthProvider = function ({ children }) {
  let [user, setUser] = React.useState(undefined);
  const isAuthenticated = SplitwiseAuth.authStatus();
  let signIn = (code) => {
    return SplitwiseAuth.signIn(code);
  };

  let signOut = () => {
    return SplitwiseAuth.signOut();
  };

  let value = { user, signIn, signOut, isAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = function () {
  return React.useContext(AuthContext);
};
export default {
  AuthProvider,
  useAuth
};
