import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePortfolioContent } from "../../context/PortfolioContentContext";

const emptyExperience = {
  company: "",
  role: "",
  period: "",
  location: "",
  summary: "",
};

const ExperiencesAdminPage = () => {
  const { token } = useAuth();
  const { content, updateSection } = usePortfolioContent();

  const [experiences, setExperiences] = useState(content.experiences);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setExperiences(content.experiences);
  }, [content.experiences]);

  const handleSave = async () => {
    try {
      await updateSection("experiences", experiences, token);
      setStatus("Experiences updated successfully.");
    } catch (error) {
      setStatus(error.message || "Failed to update experiences.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Experience Section</h2>
          <p className="text-gray-600 text-sm">Manage work experience entries and descriptions.</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-success-600 hover:bg-success-700 text-white font-semibold shadow-theme-sm hover:shadow-theme-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          onClick={() => setExperiences((prev) => [...prev, { ...emptyExperience }])}
        >
          <i className="bi bi-plus-circle"></i>
          Add Experience
        </button>
      </div>

      {/* Experiences Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm p-6">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5" key={`experience-${index}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    value={experience.company}
                    onChange={(e) => setExperiences((prev) => prev.map((item, itemIndex) => itemIndex === index ? { ...item, company: e.target.value } : item))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    value={experience.role}
                    onChange={(e) => setExperiences((prev) => prev.map((item, itemIndex) => itemIndex === index ? { ...item, role: e.target.value } : item))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Period</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    value={experience.period}
                    onChange={(e) => setExperiences((prev) => prev.map((item, itemIndex) => itemIndex === index ? { ...item, period: e.target.value } : item))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    value={experience.location}
                    onChange={(e) => setExperiences((prev) => prev.map((item, itemIndex) => itemIndex === index ? { ...item, location: e.target.value } : item))}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Summary</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200 resize-none"
                    value={experience.summary}
                    onChange={(e) => setExperiences((prev) => prev.map((item, itemIndex) => itemIndex === index ? { ...item, summary: e.target.value } : item))}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-error-200 bg-white text-error-700 text-sm font-semibold hover:bg-error-50 hover:border-error-300 transition-all duration-200"
                  onClick={() => setExperiences((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                >
                  <i className="bi bi-trash"></i>
                  Remove Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-theme-md hover:shadow-theme-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <i className="bi bi-check-circle"></i>
          Save Experiences
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

export default ExperiencesAdminPage;
