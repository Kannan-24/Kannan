import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePortfolioContent } from "../../context/PortfolioContentContext";

const HeroAdminPage = () => {
  const { token } = useAuth();
  const { content, updateSection } = usePortfolioContent();

  const [form, setForm] = useState(content.hero);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setForm(content.hero);
  }, [content.hero]);

  const handleSave = async () => {
    try {
      await updateSection("hero", form, token);
      setStatus("Hero updated successfully.");
    } catch (error) {
      setStatus(error.message || "Failed to update hero section.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hero Section</h2>
        <p className="text-gray-600 text-sm">Update your intro text, roles, and call-to-action.</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Greeting */}
          <div>
            <label htmlFor="greeting" className="block text-sm font-semibold text-gray-700 mb-2">
              Greeting
            </label>
            <input
              id="greeting"
              type="text"
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
              value={form.greeting}
              onChange={(e) => setForm((prev) => ({ ...prev, greeting: e.target.value }))}
              placeholder="e.g., Hi, I'm"
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Your full name"
            />
          </div>

          {/* CTA Text */}
          <div>
            <label htmlFor="ctaText" className="block text-sm font-semibold text-gray-700 mb-2">
              CTA Button Text
            </label>
            <input
              id="ctaText"
              type="text"
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
              value={form.ctaText}
              onChange={(e) => setForm((prev) => ({ ...prev, ctaText: e.target.value }))}
              placeholder="e.g., Get in Touch"
            />
          </div>

          {/* Roles */}
          <div>
            <label htmlFor="roles" className="block text-sm font-semibold text-gray-700 mb-2">
              Roles <span className="text-gray-500 font-normal">(one per line)</span>
            </label>
            <textarea
              id="roles"
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200 resize-none"
              value={form.roles.join("\n")}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  roles: e.target.value.split("\n").map((item) => item.trim()).filter(Boolean),
                }))
              }
              placeholder="Full Stack Developer&#10;UI/UX Designer&#10;Cloud Architect"
            />
          </div>

          {/* Description (Full Width) */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200 resize-none"
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="A brief introduction about yourself..."
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-theme-md hover:shadow-theme-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <i className="bi bi-check-circle"></i>
          Save Changes
        </button>

        {status && (
          <div className="px-4 py-2 rounded-xl border-2 border-success-200 bg-success-50">
            <p className="text-sm font-medium text-success-700 flex items-center gap-2">
              <i className="bi bi-check-circle-fill"></i>
              {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroAdminPage;
