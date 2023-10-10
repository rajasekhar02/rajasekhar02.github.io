import SocialMedia from "./SocialMedia";
import Github from "src/assets/github.svg?react";
import Twitter from "src/assets/twitter.svg?react";
import Linkedin from "src/assets/linkedin.svg?react";
export default function SocialMediaBar() {
  // TODO: Migrate the social media urls to a Database or Contentful
  const metaData = [
    {
      url: "https://linkedin.com/rajasekhar02",
      ariaLabel: "Follow on LinkedIn",
      icon: <Linkedin />
    },
    {
      url: "https://github.com/rajasekhar02",
      ariaLabel: "Follow on GitHub",
      icon: <Github />
    },
    {
      url: "https://twitter.com/rajasekhar02",
      ariaLabel: "Follow on Twitter",
      icon: <Twitter />
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
