import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const navigationItems = [
  { title: 'About me', path: 'about-me' },
  { title: 'Projects', path: 'projects' },
  { title: 'Learning References', path: 'learning-references' },
];
export default function NavBar() {
  let [showOnLg, setShowOnLg] = useState('')
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Quest to Learn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick = {() => showOnLg == "" ? setShowOnLg('show'):setShowOnLg("")}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showOnLg}`} id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            {navigationItems.map((eachItem) => {
              return (
                <li className="nav-item" key={eachItem.path}>
                  <Link
                    className="nav-link active"
                    aria-current={eachItem.title}
                    to={`/${eachItem.path}`}
                  >
                    {eachItem.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
                <a className="nav-link active" href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/12jheehLMiG0Q9Bp0SZ4AZ2ThEcqFmWjN-yJs7Mj7NY8/export?format=pdf"> <i className="bi bi-file-pdf"></i>Download Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
