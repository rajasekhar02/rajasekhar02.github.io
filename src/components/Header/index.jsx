// import ProfilePicture from "../routes/AboutMe/ProfilePicture";

import { useLocation } from "react-router";
import NavigationMenu from "./NavigationMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useRef } from "react";

export default function Header() {
  let location = useLocation();
  let isIndexPath = "/" === location.pathname;
  let headerRef = useRef(null);
  let contentOffsetter = useRef(undefined);
  let s = useRef(true);
  console.log(import.meta.env.BASE_URL);
  function addProperty(e, r) {
    document.documentElement.style.setProperty(e, r);
  }
  function removeProperty(e) {
    document.documentElement.style.removeProperty(e);
  }
  function clamp(e, r, t) {
    return Math.min(Math.max(e, Math.min(r, t)), Math.max(r, t));
  }
  useEffect(() => {
    let contentOffset =
      contentOffsetter.current !== undefined
        ? contentOffsetter.current.offsetTop
        : 0;
    function l() {
      (function () {
        if (!headerRef.current) return;
        let { top: e, height: t } = headerRef.current.getBoundingClientRect();
        console.log(`header coordinates: top:${e}, height:${t}, diff:${e + t}`);
        let n = clamp(
          window.scrollY,
          0,
          document.body.scrollHeight - window.innerHeight
        );
        console.log(`n: ${n}, contentOffset: ${contentOffset}`);
        if (s.current) {
          addProperty("--header-position", "sticky");
        }
        addProperty("--content-offset", `${contentOffset}px`);
        if (s.current || n < contentOffset) {
          addProperty("--header-height", `${contentOffset + t}px`);
          addProperty("--header-mb", `${-contentOffset}px`);
        } else if (e + t < -64) {
          let e = Math.max(t, n - 64);
          addProperty("--header-height", `${e}px`);
          addProperty("--header-mb", `${t - e}px`);
        } else if (e === 0) {
          addProperty("--header-height", `${n + t}px`);
          addProperty("--header-mb", `${-n}px`);
        }

        if (e === 0 && n > 0 && n >= contentOffset) {
          addProperty("--header-inner-position", "fixed");
          removeProperty("--header-top");
          removeProperty("--avatar-top");
        } else {
          removeProperty("--header-inner-position");
          addProperty("--header-top", "0px");
          addProperty("--avatar-top", "0px");
        }
      })();
      (function () {
        if (!isIndexPath) return;
        let r = 36 / 64,
          t = 2 / 16,
          n = contentOffset - window.scrollY,
          s = (n * (1 - r)) / contentOffset + r;
        s = clamp(s, 1, r);
        let o = (n * (0 - t)) / contentOffset + t;
        addProperty(
          "--avatar-image-transform",
          `translate3d(${(o = clamp(o, 0, t))}rem, 0, 0) scale(${s})`
        );
        let l = 1 / (r / s);
        addProperty(
          "--avatar-border-transform",
          `translate3d(${(-t + o) * l}rem, 0, 0) scale(${l})`
        ),
          addProperty("--avatar-border-opacity", s === r ? "1" : "0");
      })();
      s.current = !1;
    }
    l();
    window.addEventListener("scroll", l, {
      passive: true
    });
    window.addEventListener("resize", l);
    return () => {
      window.removeEventListener("scroll", l),
        window.removeEventListener("resize", l);
    };
  }, [isIndexPath]);
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
            ref={contentOffsetter}
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
                      <a
                        aria-label="Home"
                        className="block h-16 w-16 origin-left pointer-events-auto"
                        style={{ transform: "var(--avatar-image-transform)" }}
                        href="/"
                      >
                        {/* <ProfilePicture></ProfilePicture> */}
                        <img
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                          src="/src/assets/profile-picture.png"
                          alt="profile picture"
                        />
                      </a>
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
