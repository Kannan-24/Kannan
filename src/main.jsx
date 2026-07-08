import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./app.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { PortfolioContentProvider } from "./context/PortfolioContentContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import RequireAdminAuth from "./pages/admin/RequireAdminAuth.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import HeroAdminPage from "./pages/admin/HeroAdminPage.jsx";
import SkillsAdminPage from "./pages/admin/SkillsAdminPage.jsx";
import ProjectsAdminPage from "./pages/admin/ProjectsAdminPage.jsx";
import ExperiencesAdminPage from "./pages/admin/ExperiencesAdminPage.jsx";
import MessagesAdminPage from "./pages/admin/MessagesAdminPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <PortfolioContentProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <RequireAdminAuth>
                    <AdminLayout />
                  </RequireAdminAuth>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="hero" element={<HeroAdminPage />} />
                <Route path="skills" element={<SkillsAdminPage />} />
                <Route path="projects" element={<ProjectsAdminPage />} />
                <Route path="experiences" element={<ExperiencesAdminPage />} />
                <Route path="messages" element={<MessagesAdminPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PortfolioContentProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
