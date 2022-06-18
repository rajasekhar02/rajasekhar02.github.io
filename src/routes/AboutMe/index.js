import React from "react";
import SideBar from "./SideBar";
import Education from "./Education";
import Experience from "./Experience";
import "./index.css";
import { AboutMeProvider } from "./AboutMeContext";
export default function AboutMe() {
  return (
    <section className="resume d-flex flex-wrap">
      <AboutMeProvider>
        <SideBar />
        <main className="content p-3 flex-grow-1">
          {/* <section className="summary mt-3">
          <p className="heading fw-bold fs-4 border-bottom">Summary</p>
        </section> */}
          <Education />
          <Experience />
        </main>
      </AboutMeProvider>
    </section>
  );
}
