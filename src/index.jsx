import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import App from "./App";
import AboutMe from "./routes/AboutMe/index";
import LearningReferences from "./routes/LearningReferences";
import Projects from "./routes/Projects/index";
import ProjectGrids from "./routes/Projects/ProjectGrids";
import NoMatch from "./routes/NoMatch";
import React from "react";
import { AboutMeProvider } from "./routes/AboutMe/AboutMeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      id="menuItems"
      loader={() => [
        { name: "About", path: "/about" },
        { name: "Articles", path: "/articles" },
        { name: "Projects", path: "/projects" },
        { name: "Uses", path: "/uses" }
      ]}
    >
      <Route index element={<AboutMe />}></Route>
      <Route path="about" element={<AboutMe />}>
        <Route path=":string_slug" element={<AboutMe />} />
      </Route>
      <Route path="articles" element={<NoMatch></NoMatch>}></Route>
      <Route path="uses" element={<NoMatch></NoMatch>}></Route>
      <Route path="projects" element={<Projects />}>
        <Route index element={<ProjectGrids />}></Route>
      </Route>
      <Route
        path="learning-references"
        element={<LearningReferences />}
      ></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <AboutMeProvider>
      <RouterProvider router={router} />
    </AboutMeProvider>
  </React.StrictMode>
);
