import SideBar from "./SideBar";
import Education from "./Education";
import Experience from "./Experience";
import "./index.css";
import { AboutMeProvider } from "./AboutMeContext";
import SocialMediaBar from "../../components/SocialMediaBar";

export default function AboutMe() {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Software developer, Frontend
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Hi, I&apos;m Raja Sekhar Pothina, and I live in Rolla,
                  Missouri. I completed my Bachelor&apos;s degree in Computer
                  Science and am currently pursuing a Master&apos;s degree in
                  Computer Science at Missouri S&T. I have 5 years of experience
                  as a software engineer. I worked on projects that involved
                  automation using tools like Selenium, UFT, Java, and C#. I
                  also have experience in frontend development using Vue.js and
                  its related tools. On my personal interest I am learning
                  CI/CD, AWS and Python. I like to work in collaborative
                  environment where different people come up with ideas and work
                  together to solve problems and create new things. This fits
                  well with my desire to contribute meaningfully to projects
                  that have a lasting impact. I&apos;m excited to learn and grow
                  through new experiences and opportunities.
                </p>
                <SocialMediaBar></SocialMediaBar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="space-y-10 lg:pl-16 xl:pl-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
