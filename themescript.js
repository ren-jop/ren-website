(() => {
  const root = document.documentElement;

let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("theme");
  } catch (e) {}

const systemDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const isDark =
    savedTheme === "dark" ||
    (savedTheme !== "light" && systemDark);

 root.classList.toggle("darkmode", isDark);
 root.style.colorScheme = isDark ? "dark" : "light";
})();
