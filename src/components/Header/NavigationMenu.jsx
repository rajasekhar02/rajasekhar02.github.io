import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function NavigationMenu() {
  return (
    <>
      <div className="pointer-events-auto md:hidden" data-headlessui-state="">
        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon
                  className={`stroke-{1.5} fill-none ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400 ${
                    open ? "rotate-180 transform" : ""
                  }`}
                />
              </Popover.Button>

              <Popover.Panel className="absolute z-10">
                <div
                  className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
                  id="headlessui-popover-overlay-:r2g:"
                  aria-hidden="true"
                ></div>
                <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                  <div className="flex flex-row-reverse items-center justify-between">
                    <Popover.Button
                      aria-label="Close menu"
                      className="-m-1 p-1"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <path
                          d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Popover.Button>
                    <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Navigation
                    </h2>
                  </div>
                  <nav className="mt-6">
                    <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                      <li>
                        <a
                          className="block py-2"
                          data-headlessui-state="open"
                          href="/about"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2"
                          data-headlessui-state="open"
                          href="/articles"
                        >
                          Articles
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2"
                          data-headlessui-state="open"
                          href="/projects"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2"
                          data-headlessui-state="open"
                          href="/speaking"
                        >
                          Speaking
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-2"
                          data-headlessui-state="open"
                          href="/uses"
                        >
                          Uses
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        {/* <button
          className=""
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
        </button> */}
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
    </>
  );
}
