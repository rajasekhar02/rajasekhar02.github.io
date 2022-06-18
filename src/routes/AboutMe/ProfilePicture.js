import React from "react";
import logo from "assets/profile-picture.png"; // Tell webpack this JS file uses this image
import { useAboutMe } from "./AboutMeContext";
import get from "lodash.get";
export default function ProfilePicture() {
  const aboutMeContext = useAboutMe();
  return (
    <div className="image-mask">
      <img
        src={get(aboutMeContext.userDetails, "profilePictureUrl.url") || logo}
        className="img-fluid rounded"
        alt="Profile Picture"
        width="150"
      />
    </div>
  );
}
