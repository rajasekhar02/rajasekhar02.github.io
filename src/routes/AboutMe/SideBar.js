import React, { useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import { getUserDetails } from "./services";
import { useAboutMe } from "./AboutMeContext";
import get from "lodash.get";
export default function SideBar() {
  const aboutMeContext = useAboutMe();
  useEffect(() => {
    (async () => {
      const response = await getUserDetails();
      aboutMeContext.setUserDetails(response);
      console.log(response);
    })();
  }, []);
  return (
    <aside className="side-container border-end flex-grow-3 p-3">
      <div className="profile-picture">
        <ProfilePicture />
      </div>
      <div className="name fs-4 fw-semibold">
        {["firstName", "lastName"].reduce((acc, currKey, index) => {
          return `${acc} ${get(
            aboutMeContext.userDetails,
            currKey,
            index === 0 ? "Loading..." : ""
          )}`;
        }, "")}
      </div>
      {/* <div className="role fst-italic">Student</div> */}
      <div className="work-motto mt-3">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="fs-6">
              {get(aboutMeContext.userDetails, "quotes.text", "Loading ...")}
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {get(aboutMeContext.userDetails, "quotes.author", "Loading ...")}
          </figcaption>
        </figure>
      </div>
      <div className="contact-details">
        <ul className="list-group list-group-flush contact-info">
          <li className="list-group-item fw-semibold text-center">Contact</li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href={get(
                aboutMeContext.userDetails,
                "contactDetails.houseAddress.googleMapsLink",
                "Loading ..."
              )}
            >
              <address>
                <i className="bi bi-geo-alt-fill"> </i>
                <span>
                  {get(
                    aboutMeContext.userDetails,
                    "contactDetails.houseAddress.addressLine1",
                    "Loading ..."
                  )}
                  ,
                </span>
                <div className="ms-4">
                  {get(
                    aboutMeContext.userDetails,
                    "contactDetails.houseAddress.city",
                    "Loading ..."
                  )}
                  ,
                </div>
                <div className="ms-4">
                  {get(
                    aboutMeContext.userDetails,
                    "contactDetails.houseAddress.state",
                    "Loading ..."
                  )}
                  -
                  {get(
                    aboutMeContext.userDetails,
                    "contactDetails.houseAddress.pinCode",
                    "Loading ..."
                  )}
                </div>
              </address>
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href={`tel:+${get(
                aboutMeContext.userDetails,
                "contactDetails.phoneNumber.number",
                "Loading ..."
              )}`}
            >
              <i className="bi bi-phone">
                &nbsp;
                {get(
                  aboutMeContext.userDetails,
                  "contactDetails.phoneNumber.displayNumber",
                  "Loading ..."
                )}
              </i>
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href={`mailto:${get(
                aboutMeContext.userDetails,
                "contactDetails.email",
                "Loading ..."
              )}`}
            >
              <i className="bi bi-envelope">
                &nbsp;{" "}
                {get(
                  aboutMeContext.userDetails,
                  "contactDetails.email",
                  "Loading ..."
                )}
              </i>
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href={get(
                aboutMeContext.userDetails,
                "contactDetails.githubProfileLink.link",
                "Loading ..."
              )}
            >
              <i className="bi bi-github">
                &nbsp;
                {get(
                  aboutMeContext.userDetails,
                  "contactDetails.githubProfileLink.title",
                  "Loading ..."
                )}
              </i>
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="contact-link"
              href={get(
                aboutMeContext.userDetails,
                "contactDetails.linkedInProfileLink.link",
                "Loading ..."
              )}
            >
              <i className="bi bi-linkedin">
                &nbsp;
                {get(
                  aboutMeContext.userDetails,
                  "contactDetails.linkedInProfileLink.title",
                  "Loading ..."
                )}
              </i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
