import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../AuthContext";

export default function Splitwise() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}
