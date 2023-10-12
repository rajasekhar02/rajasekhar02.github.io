// import ProfilePicture from "../routes/AboutMe/ProfilePicture";

import { useLocation } from "react-router";
import NavigationMenu from "./NavigationMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import useScrollEffects from "./useScrollEffects";
import ProfilePicture from "./ProfilePicture";

export default function Header() {
  let location = useLocation();
  let isIndexPath = "/" === location.pathname;
  let [headerRef, contentOffsetRef] = useScrollEffects();

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)"
      }}
    >
      {isIndexPath && (
        <>
          <div
            ref={contentOffsetRef}
            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
          ></div>
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
                      <ProfilePicture></ProfilePicture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        ref={headerRef}
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
                  <div className="flex flex-1">
                    {!isIndexPath && (
                      <a
                        aria-label="Home"
                        className="pointer-events-auto"
                        href="/"
                      >
                        <img
                          src="/src/assets/profile-picture.png"
                          alt="Raja Sekhar"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                          style={{ color: "transparent;" }}
                        />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <NavigationMenu></NavigationMenu>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <ThemeSwitcher />
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
