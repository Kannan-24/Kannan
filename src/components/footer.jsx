import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { colors } = useTheme();
  
  return (
    <div className="footer" style={{ backgroundColor: colors.background, color: colors.textSecondary }}>
      <p>Designed & Built by Kannan</p>
    </div>
  );
};

export default Footer;
