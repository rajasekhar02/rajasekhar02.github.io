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
  );
}
