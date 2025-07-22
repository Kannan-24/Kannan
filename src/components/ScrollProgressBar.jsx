import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
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
        top: 0,
        left: 0,
        width: `${scrollTop}%`,
        height: "4px",
        backgroundColor: "#64ffda",
        zIndex: 9999,
        transition: "width 0.15s ease-out",
      }}
    />
  );
};

export default ScrollProgressBar;
