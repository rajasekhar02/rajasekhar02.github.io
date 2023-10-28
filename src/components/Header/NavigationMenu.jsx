import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLocation, useRouteLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

const MDHiddenNavigationMenu = function () {
  const menuItems = useRouteLoaderData("menuItems");
  return (
    <Popover className="relative pointer-events-auto md:hidden">
      {({ open }) => (
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
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
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
                  {menuItems.map((item, index) => {
                    return (
                      <li key={`menu-md-hidden-${index}`}>
                        <Popover.Button as={NavLink}
                          className="block py-2"
                          data-headlessui-state="open"
                          to={item.path}
                        >
                          {item.name}
                        </Popover.Button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default function NavigationMenu() {
  const menuItems = useRouteLoaderData("menuItems");
  let location = useLocation();
  const isVisitedPath = function (pathName) {
    return location.pathname === pathName;
  };
  return (
    <>
      <MDHiddenNavigationMenu />
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {menuItems.map((eachMenuItem, index) => {
            return (
              <li key={`menu-item-${index}`}>
                <NavLink
                  className={`relative block px-3 py-2 transition ${
                    isVisitedPath(eachMenuItem.path) &&
                    `text-teal-500 dark:text-teal-400`
                  } hover:text-teal-500 dark:hover:text-teal-400`}
                  to={eachMenuItem.path}
                >
                  {eachMenuItem.name}
                  {isVisitedPath(eachMenuItem.path) && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
