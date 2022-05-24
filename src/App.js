import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
export default function App() {
  const navigationItems = [
    { title: 'About me', path: 'about-me' },
    { title: 'Projects', path: 'projects' },
    { title: 'Learning Referneces', path: 'learning-references' },
    { title: 'Download Resume', path: 'resume' },
  ];
  return (
    <div>
      <div className="header">
        <ul>
          {navigationItems.map((eachItem) => {
            return (
              <li key={eachItem.path}>
                <Link to={`/${eachItem.path}`}>{eachItem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
