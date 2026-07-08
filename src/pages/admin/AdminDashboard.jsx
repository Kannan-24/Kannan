import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Management</h2>
        <p className="text-gray-600 text-sm">Choose a section to update portfolio data.</p>
      </div>

      {/* Quick Links Grid */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin/hero"
            className="group relative overflow-hidden flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-theme-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-200">
              <i className="bi bi-stars text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                Hero Section
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Edit homepage hero</p>
            </div>
            <i className="bi bi-arrow-right text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-200"></i>
          </Link>

          <Link
            to="/admin/skills"
            className="group relative overflow-hidden flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-theme-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-success-100 text-success-700 flex items-center justify-center group-hover:bg-success-600 group-hover:text-white transition-all duration-200">
              <i className="bi bi-magic text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                Skills
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Manage skills list</p>
            </div>
            <i className="bi bi-arrow-right text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-200"></i>
          </Link>

          <Link
            to="/admin/projects"
            className="group relative overflow-hidden flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-theme-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-warning-100 text-warning-700 flex items-center justify-center group-hover:bg-warning-600 group-hover:text-white transition-all duration-200">
              <i className="bi bi-kanban text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                Projects
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Update project portfolio</p>
            </div>
            <i className="bi bi-arrow-right text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-200"></i>
          </Link>

          <Link
            to="/admin/experiences"
            className="group relative overflow-hidden flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-theme-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-error-100 text-error-700 flex items-center justify-center group-hover:bg-error-600 group-hover:text-white transition-all duration-200">
              <i className="bi bi-briefcase text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                Experiences
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Manage work history</p>
            </div>
            <i className="bi bi-arrow-right text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-200"></i>
          </Link>

          <Link
            to="/admin/messages"
            className="group relative overflow-hidden flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:shadow-theme-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center group-hover:bg-gray-600 group-hover:text-white transition-all duration-200">
              <i className="bi bi-chat-left-text text-xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                Messages
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">View contact submiss</p>
            </div>
            <i className="bi bi-arrow-right text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-200"></i>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-theme-sm p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total Projects</span>
            <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center">
              <i className="bi bi-kanban text-lg"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">-</div>
          <p className="text-xs text-gray-500 mt-1">Manage in Projects page</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-theme-sm p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Skills</span>
            <div className="w-10 h-10 rounded-lg bg-success-100 text-success-600 flex items-center justify-center">
              <i className="bi bi-magic text-lg"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">-</div>
          <p className="text-xs text-gray-500 mt-1">Technical skills listed</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-theme-sm p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Experiences</span>
            <div className="w-10 h-10 rounded-lg bg-warning-100 text-warning-600 flex items-center justify-center">
              <i className="bi bi-briefcase text-lg"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">-</div>
          <p className="text-xs text-gray-500 mt-1">Work positions tracked</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-theme-sm p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Messages</span>
            <div className="w-10 h-10 rounded-lg bg-error-100 text-error-600 flex items-center justify-center">
              <i className="bi bi-envelope text-lg"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">-</div>
          <p className="text-xs text-gray-500 mt-1">Contact form submissions</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
