import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ScrollProgressBar = () => {
  const { colors } = useTheme();
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollY / docHeight) * 100;
    setScrollTop(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 62,
        left: 0,
        width: `${scrollTop}%`,
        height: "4px",
        backgroundColor: colors.accent,
        zIndex: 9999,
        transition: "width 0.15s ease-out",
      }}
    />
  );
};

export default ScrollProgressBar;
