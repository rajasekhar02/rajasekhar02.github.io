import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from './App';
import AboutMe from './routes/AboutMe/index';
import LearningReferences from './routes/LearningReferences';
import Projects from './routes/Projects/index';
import ProjectGrids from './routes/Projects/ProjectGrids';
import NoMatch from "./routes/NoMatch";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AboutMe />}></Route>
        <Route path="about-me" element={<AboutMe />}>
          <Route path=":string_slug" element={<AboutMe />} />
        </Route>
        <Route path="projects" element={<Projects />}>
          <Route index element={<ProjectGrids />}></Route>
        </Route>
        <Route
          path="learning-references"
          element={<LearningReferences />}
        ></Route>
        <Route path="*" element={<NoMatch />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
