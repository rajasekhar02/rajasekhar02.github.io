import React from 'react';
import ProfilePicture from './ProfilePicture';
import './index.css';
export default function AboutMe() {
  return (
    <section className="resume d-flex">
      <aside className="side-container">
        <ProfilePicture />
        <div>Raja Sekhar Pothina</div>
        <div>Student</div>
        <div className="work-motto">
          <figure class="text-center">
            <blockquote class="blockquote">
              <p>
                Keep Struggling, Success is just a day far and remind this to
                yourself everyday
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">anonymous</figcaption>
          </figure>
        </div>
        <div>
          <div className="address">
            <p>
              <span>
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              &nbsp; 1300 N Oak Street, Rolla, Missouri-65401
            </p>
          </div>
          <ul className="contact-info">
            <li>
              <i class="bi bi-phone"></i>
              <a href="tel:+15732021224">+1-(573)-202-1224</a>
            </li>
            <li>
              <i class="bi bi-envelope">
                &nbsp;
                <a href="mailto:raja02sekhar08@gmail.com">
                  raja02sekhar08@gmail.com
                </a>
              </i>
            </li>
            <li>
              <i class="bi bi-github">
                &nbsp;<a href="https://github.com/rajasekhar02">rajasekhar02</a>
              </i>
            </li>
          </ul>
        </div>
      </aside>
      <main className="content"></main>
    </section>
  );
}
