import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import { ThemeContext } from "./theme";

const STORAGE_KEY = "portfolio-theme";

// The <html data-theme> attribute is the source of truth: the inline script in
// index.html sets it from localStorage before first paint. Reading it through
// useSyncExternalStore lets the pre-rendered HTML (always "dark") hydrate
// cleanly, after which React switches to the visitor's saved theme.
const listeners = new Set();
const subscribe = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};
const getSnapshot = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
const getServerSnapshot = () => "dark";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage unavailable (private mode, blocked cookies)
  }
  listeners.forEach((listener) => listener());
};

export const ThemeProvider = ({ children }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#05080b" : "#f4f7f6");
  }, [theme]);

  const toggleTheme = useCallback(
    () => applyTheme(getSnapshot() === "dark" ? "light" : "dark"),
    []
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
