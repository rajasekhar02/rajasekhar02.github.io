import React from "react";
import { Outlet } from "react-router";

export default function Projects() {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </main>
    // <main>
    //   <Outlet></Outlet>
    // </main>
  );
}
///splitwise/redirect?code=eXuvGafqTmh1TXTPrAdy&state=6ca0d570-50fb-42be-95eb-a7b02d6cf79d
