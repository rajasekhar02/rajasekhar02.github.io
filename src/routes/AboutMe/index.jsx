import SideBar from "./SideBar";
import Education from "./Education";
import Experience from "./Experience";
import "./index.css";
import { AboutMeProvider } from "./AboutMeContext";
import SocialMedia from "../../components/SocialMedia";

function OldAboutMe() {
  return (
    <section classNameNameName="resume">
      <AboutMeProvider>
        <SideBar />
        <main classNameNameName="">
          {/* <section classNameNameName="summary mt-3">
          <p classNameNameName="heading fw-bold fs-4 border-bottom">Summary</p>
        </section> */}
          <Education />
          <Experience />
        </main>
      </AboutMeProvider>
    </section>
  );
}

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
                  that have a lasting impact. I'm excited to learn and grow
                  through new experiences and opportunities.
                </p>
                <div className="mt-6 flex gap-6">
                  <SocialMedia
                    url="https://twitter.com/rajasekhar02"
                    ariaLabel="Follow on Twitter"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                    </svg>
                  </SocialMedia>
                  <SocialMedia
                    ariaLabel="Follow on GitHub"
                    url="https://github.com"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                      ></path>
                    </svg>
                  </SocialMedia>
                  <SocialMedia
                    ariaLabel="Follow on LinkedIn"
                    url="https://linkedin.com/rajasekhar02"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                  </SocialMedia>
                </div>
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
              srcset=""
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
              srcset=""
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
              srcset=""
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
                <div className="flex flex-col gap-16">
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Crafting a design system for a multiplanetary future
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      datetime="2022-09-05"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      September 5, 2022
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Most companies try to stay ahead of the curve when it
                      comes to visual design, but for Planetaria we needed to
                      create a brand that would still inspire us 100 years from
                      now when humanity has spread across our entire solar
                      system.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/introducing-animaginary">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Introducing Animaginary: High performance web
                          animations
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      datetime="2022-09-02"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      September 2, 2022
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      When you’re building a website for a company as ambitious
                      as Planetaria, you need to make an impression. I wanted
                      people to visit our website and see animations that looked
                      more realistic than reality itself.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/rewriting-the-cosmos-kernel-in-rust">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Rewriting the cosmOS kernel in Rust
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      datetime="2022-07-14"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      July 14, 2022
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      When we released the first version of cosmOS last year, it
                      was written in Go. Go is a wonderful programming language,
                      but it’s been a while since I’ve seen an article on the
                      front page of Hacker News about rewriting some important
                      tool in Go and I see articles on there about rewriting
                      things in Rust every single week.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <form
                    className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                    action="/thank-you"
                    data-dashlane-rid="f4601ac85f02fee7"
                    data-form-type="other"
                  >
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none"
                      >
                        <path
                          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                        ></path>
                        <path
                          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                          className="stroke-zinc-400 dark:stroke-zinc-500"
                        ></path>
                      </svg>
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Get notified when I publish something new, and unsubscribe
                      at any time.
                    </p>
                    <div className="mt-6 flex">
                      <input
                        type="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        required=""
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                        data-dashlane-rid="52f4f890d2c09b51"
                        data-kwimpalastatus="alive"
                        data-kwimpalaid="1696356226153-0"
                        data-form-type="email"
                      />
                      <button
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                        type="submit"
                        data-dashlane-rid="36ce37793bb2d546"
                        data-form-type="other"
                        data-dashlane-label="true"
                      >
                        Join
                      </button>
                    </div>
                  </form>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none"
                      >
                        <path
                          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                        ></path>
                        <path
                          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                          className="stroke-zinc-400 dark:stroke-zinc-500"
                        ></path>
                      </svg>
                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <img
                            alt=""
                            loading="lazy"
                            width="32"
                            height="32"
                            decoding="async"
                            data-nimg="1"
                            className="h-7 w-7"
                            style={{ color: "transparent" }}
                            src="/_next/static/media/planetaria.ecd81ade.svg"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Planetaria
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            CEO
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2019 until Present"
                          >
                            <time datetime="2019">2019</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2023">Present</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <img
                            alt=""
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            className="h-7 w-7"
                            style={{ color: "transparent" }}
                            src="/_next/static/media/airbnb.b4000690.svg"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Airbnb
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Product Designer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2014 until 2019"
                          >
                            <time datetime="2014">2014</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2019">2019</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <img
                            alt=""
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            className="h-7 w-7"
                            style={{ color: "transparent" }}
                            src="/_next/static/media/facebook.dd9e7d48.svg"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Facebook
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            iOS Software Engineer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2011 until 2014"
                          >
                            <time datetime="2011">2011</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2014">2014</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <img
                            alt=""
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            className="h-7 w-7"
                            style={{ color: "transparent" }}
                            src="/_next/static/media/starbucks.4a5bd050.svg"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Starbucks
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Shift Supervisor
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2008 until 2011"
                          >
                            <time datetime="2008">2008</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2011">2011</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="#"
                    >
                      Download CV
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                      >
                        <path
                          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
