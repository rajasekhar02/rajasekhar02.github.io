import logo from "src/assets/profile-picture.png"; // Tell webpack this JS file uses this image
import ProfilePicPlaceholder from "src/assets/placeholder.svg?react";
import { useAboutMe } from "../../routes/AboutMe/AboutMeContext";
import get from "lodash.get";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
ProfilePicture.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default function ProfilePicture({ size = "small" }) {
  const sizeToCss = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-16 w-16"
  };
  const aboutMeContext = useAboutMe();
  return (
    <NavLink
      aria-label="Home"
      className={`block ${sizeToCss[size]} origin-left pointer-events-auto`}
      style={{ transform: "var(--avatar-image-transform)" }}
      to="/"
    >
      {aboutMeContext.userDetails ? (
        <img
          className={`rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ${sizeToCss[size]}`}
          src={get(aboutMeContext.userDetails, "profilePictureUrl.url") || logo}
          alt="profile picture"
        />
      ) : (
        <ProfilePicPlaceholder></ProfilePicPlaceholder>
      )}
    </NavLink>
  );
}
