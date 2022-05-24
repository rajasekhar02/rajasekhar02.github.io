import React from 'react';
import { Link } from 'react-router-dom';
const navigationItems = [
  { title: 'About me', path: 'about-me' },
  { title: 'Projects', path: 'projects' },
  { title: 'Learning Referneces', path: 'learning-references' },
  { title: 'Download Resume', path: 'resume' },
];
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Quest to Learning
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
