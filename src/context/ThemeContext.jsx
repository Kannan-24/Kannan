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
        background: "#000000",
        text: "#ccd6f6",
        textSecondary: "#8892b0",
        accent: "#64ffda",
        cardBg: "rgba(255, 255, 255, 0.05)",
        border: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        backdropFilter: "blur(10px)",
        color: "white",
        padding: "0",
        overflow: "hidden",
        navBg: "rgba(0, 0, 0, 0.9)",
    },
    light: {
        background: "#f8f9fa",
        text: "#1a1a1a",
        textSecondary: "#4a5568",
        accent: "#3ed2ec",
        cardBg: "rgba(62, 210, 236, 0.05)",
        border: "#e2e8f0",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        backdropFilter: "blur(10px)",
        color: "white",
        padding: "0",
        overflow: "hidden",
        navBg: "rgba(255, 255, 255, 0.9)",
    },
};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
