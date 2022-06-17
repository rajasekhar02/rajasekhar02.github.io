import React from "react";
import logo from "assets/profile-picture.png"; // Tell webpack this JS file uses this image

export default function ProfilePicture() {
  return (
    <div className="image-mask">
      <img
        src={logo}
        className="img-fluid rounded"
        alt="Profile Picture"
        width="150"
      />
    </div>
  );
}
