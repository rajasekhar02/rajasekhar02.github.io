import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import AboutMe from './routes/AboutMe/index.js';
import LearningReferences from './routes/LearningReferences';
import Projects from './routes/Projects';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutMe />}></Route>
          <Route path="about-me" element={<AboutMe />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route
            path="learning-references"
            element={<LearningReferences />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
