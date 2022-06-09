import React from "react";
import { Outlet } from "react-router-dom";
import { SplitwiseContextProvider } from "./SplitwiseContext";
export default function Splitwise() {
  return (
    <div>
      <SplitwiseContextProvider>
        <Outlet></Outlet>
      </SplitwiseContextProvider>
    </div>
  );
}
