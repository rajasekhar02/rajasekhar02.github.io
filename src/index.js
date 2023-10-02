import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";
import AboutMe from "./routes/AboutMe/index.js";
import LearningReferences from "./routes/LearningReferences";
import NoMatch from "./routes/NoMatch";
import Projects from "./routes/Projects/index.js";
import ProjectGrids from "./routes/Projects/ProjectGrids";
import Splitwise from "./routes/Projects/Splitwise";
import RedirectHandler from "./routes/Projects/Splitwise/RedirectHandler";
import AuthHandler from "./routes/Projects/AuthHandler";
import { AuthProvider } from "./routes/Projects/AuthContext";
import Dashboard from "./routes/Projects/Splitwise/Dashboard";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AboutMe />}></Route>
        <Route path="about-me" element={<AboutMe />}>
          <Route
            path=":string_slug                                                                                                                                                                                                   "
            element={<AboutMe />}
          />
        </Route>
        <Route
          path="projects"
          element={
            <AuthProvider>
              <Projects />
            </AuthProvider>
          }
        >
          <Route index element={<ProjectGrids />}></Route>
          <Route path="splitwise" element={<Splitwise />}>
            <Route path="redirect" element={<RedirectHandler />}></Route>
            <Route
              path="dashboard"
              element={
                <AuthHandler>
                  <Dashboard />
                </AuthHandler>
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path="learning-references"
          element={<LearningReferences />}
        ></Route>
        {/* <Route path="resume" element={<Resume />}></Route>
         */}
        <Route path="*" element={<NoMatch />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
