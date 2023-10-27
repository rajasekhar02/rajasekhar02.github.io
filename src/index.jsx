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
import Projects from "./routes/Projects";
import ProjectsHome from "./routes/Projects/Home";
import NoMatch from "./routes/NoMatch";
import { AboutMeProvider } from "./routes/AboutMe/AboutMeContext";
import Readings from "./routes/Readings";
import ReadingsHome from "./routes/Readings/Home";
import Main from "./routes/Main";

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
        { name: "Readings", path: "/readings" },
        { name: "Projects", path: "/projects" },
        { name: "Uses", path: "/uses" }
      ]}
    >
      <Route index element={<Main />}></Route>
      <Route path="about" element={<AboutMe />}>
        <Route path=":string_slug" element={<AboutMe />} />
      </Route>
      <Route path="readings" element={<Readings></Readings>}>
        <Route index element={<ReadingsHome />}></Route>
      </Route>
      <Route path="uses" element={<NoMatch></NoMatch>}></Route>
      <Route path="projects" element={<Projects />}>
        <Route index element={<ProjectsHome />}></Route>
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
  // <React.StrictMode>
  <AboutMeProvider>
    <RouterProvider router={router} />
  </AboutMeProvider>
  // </React.StrictMode>
);
