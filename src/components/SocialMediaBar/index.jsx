import SocialMedia from "./SocialMedia";
import Github from "src/assets/github.svg?react";
import Twitter from "src/assets/twitter.svg?react";
import Linkedin from "src/assets/linkedin.svg?react";
import Email from "src/assets/email.svg?react";
import Mobile from "src/assets/mobile.svg?react";
import { useEffect } from "react";
import { getUserDetails } from "../../routes/AboutMe/services";
import { useAboutMe } from "../../routes/AboutMe/AboutMeContext";
import get from "lodash.get";
export default function SocialMediaBar() {
  const aboutMeContext = useAboutMe();
  const getPropertiesFromUserDetails = function (
    path,
    defaultValue = "Loading..."
  ) {
    return get(aboutMeContext.userDetails, path, defaultValue);
  };
  useEffect(() => {
    (async () => {
      const response = await getUserDetails();
      aboutMeContext.setUserDetails(response);
      console.log(response);
    })();
  }, []);
  // TODO: Migrate the social media urls to a Database or Contentful
  const metaData = [
    {
      url: getPropertiesFromUserDetails(
        "contactDetails.linkedInProfileLink.link"
      ),
      ariaLabel: "Follow on LinkedIn",
      icon: <Linkedin />
    },
    {
      url: getPropertiesFromUserDetails(
        "contactDetails.githubProfileLink.link"
      ),
      ariaLabel: "Follow on GitHub",
      icon: <Github />
    },
    {
      url: "https://twitter.com/raja02sekhar08",
      ariaLabel: "Follow on Twitter",
      icon: <Twitter />
    },
    {
      url: `tel:+${getPropertiesFromUserDetails(
        "contactDetails.phoneNumber.number"
      )}`,
      ariaLabel: "Get in Touch",
      icon: <Mobile />
    },
    {
      url: `mailto:${getPropertiesFromUserDetails("contactDetails.email")}`,
      ariaLabel: "Connect me through Gmail",
      icon: <Email />
    }
  ];

  return (
    <div className="mt-6 flex gap-6">
      {metaData.map((item, index) => {
        return (
          <SocialMedia
            key={`social-media-${index}`}
            url={item.url}
            ariaLabel={item.ariaLabel}
          >
            {item.icon}
          </SocialMedia>
        );
      })}
    </div>
  );
}
