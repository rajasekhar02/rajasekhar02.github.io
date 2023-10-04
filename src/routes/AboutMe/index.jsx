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
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              loading="lazy"
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ color: "transparent" }}
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt=""
              loading="lazy"
              width="3936"
              height="2624"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ color: "transparent" }}
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              loading="lazy"
              width="5760"
              height="3840"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ color: "transparent" }}
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              loading="lazy"
              width="2400"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ color: "transparent" }}
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt=""
              loading="lazy"
              width="4240"
              height="2384"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ color: "transparent" }}
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=3840&amp;q=75"
            />
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
