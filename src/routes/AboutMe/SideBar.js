import React from 'react';
import ProfilePicture from './ProfilePicture';
export default function SideBar() {
  return (
    <aside className="side-container flex-grow-2 p-3">
      <ProfilePicture />
      <div className="fs-3 fw-semibold">Raja Sekhar Pothina</div>
      <div className="role fst-italic">Student</div>
      <div className="work-motto mt-3">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="fs-6">
              Keep Struggling, Success is just a day far and remind this to
              yourself everyday
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">anonymous</figcaption>
        </figure>
      </div>
      <div>
        <ul className="list-group list-group-flush contact-info">
          <li className="list-group-item fw-semibold text-center">Contact</li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href="https://goo.gl/maps/Hyio1yvwEezJXfCZA"
            >
              <address>
                <i className="bi bi-geo-alt-fill"> </i>
                <span>1300 N Oak Street,</span>
                <div className="ms-4">Rolla,</div>
                <div className="ms-4">Missouri-65401</div>
              </address>
            </a>
          </li>
          <li className="list-group-item">
            <a className="contact-link" href="tel:+15732021224">
              <i className="bi bi-phone">&nbsp; +1-(573)-202-1224</i>
            </a>
          </li>
          <li className="list-group-item">
            <a className="contact-link" href="mailto:raja02sekhar08@gmail.com">
              <i className="bi bi-envelope">&nbsp; raja02sekhar08@gmail.com</i>
            </a>
          </li>
          <li className="list-group-item">
            <a className="contact-link" href="https://github.com/rajasekhar02">
              <i className="bi bi-github">&nbsp; rajasekhar02</i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
