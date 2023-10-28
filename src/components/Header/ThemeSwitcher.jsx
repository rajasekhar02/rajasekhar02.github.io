import ThemeDarkIcon from "src/assets/theme-dark-icon.svg?react";
import ThemeLightIcon from "src/assets/theme-light-icon.svg?react";

export default function ThemeSwitcher() {
  let handleThemeSwitch = function () {
    if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="pointer-events-auto">
      <button
        type="button"
        aria-label="Switch to light theme"
        onClick={handleThemeSwitch}
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        <ThemeDarkIcon />
        <ThemeLightIcon />
      </button>
    </div>
  );
}
