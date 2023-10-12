import logo from "src/assets/profile-picture.png"; // Tell webpack this JS file uses this image
import { useAboutMe } from "../../routes/AboutMe/AboutMeContext";
import get from "lodash.get";
export default function ProfilePicture() {
  const aboutMeContext = useAboutMe();
  return (
    <a
      aria-label="Home"
      className="block h-16 w-16 origin-left pointer-events-auto"
      style={{ transform: "var(--avatar-image-transform)" }}
      href="/"
    >
      {aboutMeContext.userDetails ? (
        <img
          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
          src={logo}
          alt="profile picture"
        />
      ) : (
        <svg
          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
          width="150"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
      )}
    </a>
  );
}
