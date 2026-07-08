import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitleMap = {
    "/admin": "Dashboard",
    "/admin/hero": "Hero Section",
    "/admin/skills": "Skills",
    "/admin/projects": "Projects",
    "/admin/experiences": "Experiences",
    "/admin/messages": "Contact Messages",
  };

  const currentTitle = pageTitleMap[location.pathname] || "Admin Panel";

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 rounded-xl bg-white border border-gray-200 shadow-theme-md flex items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-200"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <i className={`bi ${sidebarOpen ? 'bi-x-lg text-xl' : 'bi-list text-2xl'}`}></i>
      </button>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex-shrink-0 z-40 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center text-white shadow-theme-md">
            <i className="bi bi-grid-1x2-fill text-lg"></i>
          </div>
          <span className="text-lg font-bold text-gray-900">Portfolio</span>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-8">
          {/* Content Management Section */}
          <div>
            <div className="px-3 mb-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Content
              </h3>
            </div>
            <div className="space-y-1">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-speedometer2 text-lg"></i>
                <span className="text-sm font-medium">Dashboard</span>
              </NavLink>

              <NavLink
                to="/admin/hero"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-stars text-lg"></i>
                <span className="text-sm font-medium">Hero</span>
              </NavLink>

              <NavLink
                to="/admin/skills"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-magic text-lg"></i>
                <span className="text-sm font-medium">Skills</span>
              </NavLink>

              <NavLink
                to="/admin/projects"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-kanban text-lg"></i>
                <span className="text-sm font-medium">Projects</span>
              </NavLink>

              <NavLink
                to="/admin/experiences"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-briefcase text-lg"></i>
                <span className="text-sm font-medium">Experiences</span>
              </NavLink>
            </div>
          </div>

          {/* Communication Section */}
          <div>
            <div className="px-3 mb-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Communication
              </h3>
            </div>
            <div className="space-y-1">
              <NavLink
                to="/admin/messages"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`
                }
              >
                <i className="bi bi-chat-left-text text-lg"></i>
                <span className="text-sm font-medium">Messages</span>
              </NavLink>
            </div>
          </div>

          {/* Session Section */}
          <div>
            <div className="px-3 mb-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Session
              </h3>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
            >
              <i className="bi bi-box-arrow-right text-lg"></i>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 lg:px-8 lg:py-5 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="min-w-0 lg:ml-0 ml-12">
            <div className="text-sm text-gray-500 mb-0.5">
              Dashboard / {currentTitle}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {currentTitle}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 hover:border-brand-300 transition-all duration-200"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              <span className="hidden sm:inline">View Portfolio</span>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
