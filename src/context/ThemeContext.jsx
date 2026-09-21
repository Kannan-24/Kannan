import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const colors = {
    dark: {
      background: "#080c14",
      text: "#f1f5f9",
      textSecondary: "#94a3b8",
      accent: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.3)",
      cardBg: "rgba(13, 21, 39, 0.75)",
      border: "rgba(56, 189, 248, 0.15)",
      borderRadius: "16px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      backdropFilter: "blur(12px)",
      color: "#f1f5f9",
      padding: "0",
      overflow: "hidden",
      navBg: "rgba(8, 12, 20, 0.85)",
    },
    light: {
      background: "#f8fafc",
      text: "#0f172a",
      textSecondary: "#475569",
      accent: "#0284c7",
      accentGlow: "rgba(2, 132, 199, 0.2)",
      cardBg: "rgba(255, 255, 255, 0.85)",
      border: "rgba(203, 213, 225, 0.8)",
      borderRadius: "16px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      backdropFilter: "blur(12px)",
      color: "#0f172a",
      padding: "0",
      overflow: "hidden",
      navBg: "rgba(248, 250, 252, 0.85)",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
