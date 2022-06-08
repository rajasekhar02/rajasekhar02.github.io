import React from "react";
import { Outlet } from "react-router-dom";
import { getCurrentUser } from "./services";
export default function Splitwise() {
  React.useEffect;
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}
