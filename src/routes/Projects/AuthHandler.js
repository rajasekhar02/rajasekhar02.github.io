import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function AuthHandler({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.isAuthenticated) {
    auth.signOut();
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/projects" state={{ from: location }} replace />;
  }
  return children;
}
