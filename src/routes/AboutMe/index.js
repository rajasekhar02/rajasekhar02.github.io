import React from 'react';
import ProfilePicture from './ProfilePicture';
export default function AboutMe() {
  return (
    <section className="resume">
      <aside>
        <ProfilePicture />
      </aside>
      <header className="header">
        <div>Raja Sekhar Pothina</div>
        <div>
          <div className="address">
            <p>1300 N Oak Street, Rolla, Missouri-65401</p>
          </div>
          <ul className="contact-info">
            <li>Mobile No: +1-(573)-202-1224</li>
            <li>Email Id: raja02sekhar08@gmail.com</li>
            <li>
              Github URL:{' '}
              <a href="https://github.com/rajasekhar02">rajasekhar02</a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}
