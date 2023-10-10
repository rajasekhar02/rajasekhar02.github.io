// import ProfilePicture from "../routes/AboutMe/ProfilePicture";

import { useLocation } from "react-router";
import NavigationMenu from "./NavigationMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useRef } from "react";

export default function Header() {
  let location = useLocation();
  let isIndexPath = "/" === location.pathname;
  let r = useRef(null);
  let t = useRef(null);
  let s = useRef(true);
  useEffect(() => {
    var n;
    let i =
      (null === (n = t.current) || void 0 === n ? void 0 : n.offsetTop) ?? 0;
    function a(e, r) {
      document.documentElement.style.setProperty(e, r);
    }
    function o(e) {
      document.documentElement.style.removeProperty(e);
    }
    function N(e, r, t) {
      return Math.min(Math.max(e, Math.min(r, t)), Math.max(r, t));
    }
    function l() {
      console.log(s);
      (function () {
        if (!r.current) return;
        let { top: e, height: t } = r.current.getBoundingClientRect(),
          n = N(
            window.scrollY,
            0,
            document.body.scrollHeight - window.innerHeight
          );
        if (
          (s.current && a("--header-position", "sticky"),
          a("--content-offset", `${i}px`),
          s.current || n < i)
        )
          a("--header-height", `${i + t}px`), a("--header-mb", `${-i}px`);
        else if (e + t < -64) {
          let e = Math.max(t, n - 64);
          a("--header-height", `${e}px`), a("--header-mb", `${t - e}px`);
        } else
          0 === e &&
            (a("--header-height", `${n + t}px`), a("--header-mb", `${-n}px`));
        // some problem function L is retriggering
        0 === e && n > 0 && n >= i
          ? (a("--header-inner-position", "fixed"),
            o("--header-top"),
            o("--avatar-top"))
          : (o("--header-inner-position"),
            a("--header-top", "0px"),
            a("--avatar-top", "0px"));
      })(),
        (function () {
          if (!isIndexPath) return;
          let r = 36 / 64,
            t = 2 / 16,
            n = i - window.scrollY,
            s = (n * (1 - r)) / i + r;
          s = N(s, 1, r);
          let o = (n * (0 - t)) / i + t;
          a(
            "--avatar-image-transform",
            `translate3d(${(o = N(o, 0, t))}rem, 0, 0) scale(${s})`
          );
          let l = 1 / (r / s);
          a(
            "--avatar-border-transform",
            `translate3d(${(-t + o) * l}rem, 0, 0) scale(${l})`
          ),
            a("--avatar-border-opacity", s === r ? "1" : "0");
        })(),
        (s.current = !1);
    }
    return (
      l(),
      window.addEventListener("scroll", l, {
        passive: true
      }),
      window.addEventListener("resize", l),
      () => {
        window.removeEventListener("scroll", l),
          window.removeEventListener("resize", l);
      }
    );
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
            ref={t}
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
        ref={r}
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
