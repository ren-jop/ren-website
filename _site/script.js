function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function applyTheme(theme, save = false) {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("darkmode", isDark);
  root.style.colorScheme = theme;
  
  if (save) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }
  updatethemebutton();
}

function updatethemebutton() {
  const isDark = document.documentElement.classList.contains("darkmode");

  const icon = document.querySelector(
    ".darkbutton .material-symbols-outlined"
  );

  if (icon) {
    icon.textContent = isDark ? "toggle_on" : "toggle_off"
  }

  const button = document.querySelector(".darkbutton");

  if (button) {
    button.setAttribute("aria-pressed", String(isDark));
  }
}

function darkmode() {
  const isDark = document.documentElement.classList.contains("darkmode");

  applyTheme(isDark ? "light" : "dark", true);
}

const systemPreference = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

systemPreference.addEventListener("change", (event) => {
  const saved = getSavedTheme();

  if (saved !== "dark" && saved !=="light") {
    applyTheme(event.matches ? "dark" : "light");
  }
});

updatethemebutton();

window.darkmode = darkmode;
