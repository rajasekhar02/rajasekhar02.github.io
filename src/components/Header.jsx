// import ProfilePicture from "../routes/AboutMe/ProfilePicture";
import ThemeDarkIcon from "src/assets/theme-dark-icon.svg?react";
import ThemeLightIcon from "src/assets/theme-light-icon.svg?react";

export default function Header() {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)"
      }}
    >
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div
        className="sm:px-8 top-0 order-last -mb-3 pt-3"
        style={{ position: "var(--header-position)" }}
      >
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div className="relative">
                  <div
                    className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)"
                    }}
                  ></div>
                  <a
                    aria-label="Home"
                    className="block h-16 w-16 origin-left pointer-events-auto"
                    style={{ transform: "var(--avatar-image-transform)" }}
                    href="/"
                  >
                    {/* <ProfilePicture></ProfilePicture> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{ position: "var(--header-position)" }}
      >
        <div
          className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style={{ position: "var(--header-inner-position)" }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                        id="headlessui-popover-button-:R2miqla:"
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: "0",
                        padding: "0",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        display: "none"
                      }}
                    ></div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        {[
                          ["About", "/about"],
                          ["Articles", "/articles"],
                          ["Projects", "/projects"],
                          ["Uses", "/uses"]
                        ].map((eachMenuItem, index) => {
                          return (
                            <li key={`menu-item-${index}`}>
                              <a
                                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                href={eachMenuItem[1]}
                              >
                                {eachMenuItem[0]}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Switch to light theme"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        <ThemeDarkIcon />
                        <ThemeLightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
