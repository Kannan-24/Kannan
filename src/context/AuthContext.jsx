import React, { createContext, useContext, useMemo, useState } from "react";
import { apiRequest } from "../utils/api";

const TOKEN_KEY = "portfolio-admin-token";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");

  const login = async (username, password) => {
    const response = await apiRequest("/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    localStorage.setItem(TOKEN_KEY, response.token);
    setToken(response.token);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
  };

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
