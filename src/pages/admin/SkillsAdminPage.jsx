import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePortfolioContent } from "../../context/PortfolioContentContext";

const SkillsAdminPage = () => {
  const { token } = useAuth();
  const { content, updateSection } = usePortfolioContent();

  const [skills, setSkills] = useState(content.skills);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setSkills(content.skills);
  }, [content.skills]);

  const handleSave = async () => {
    try {
      await updateSection("skills", skills, token);
      setStatus("Skills updated successfully.");
    } catch (error) {
      setStatus(error.message || "Failed to update skills.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills Section</h2>
          <p className="text-gray-600 text-sm">Add skill labels and icon keys (example: react, java, figma).</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-success-600 hover:bg-success-700 text-white font-semibold shadow-theme-sm hover:shadow-theme-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          onClick={() => setSkills((prev) => [...prev, { label: "", iconKey: "" }])}
        >
          <i className="bi bi-plus-circle"></i>
          Add Skill
        </button>
      </div>

      {/* Skills Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-theme-sm p-6">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Skill Name</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    value={skill.label}
                    onChange={(e) =>
                      setSkills((prev) =>
                        prev.map((item, itemIndex) =>
                          itemIndex === index ? { ...item, label: e.target.value } : item
                        )
                      )
                    }
                  />
                </div>
                <div className="md:col-span-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Key</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all duration-200"
                    placeholder="react, java, figma..."
                    value={skill.iconKey || ""}
                    onChange={(e) =>
                      setSkills((prev) =>
                        prev.map((item, itemIndex) =>
                          itemIndex === index ? { ...item, iconKey: e.target.value } : item
                        )
                      )
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-error-200 bg-white text-error-700 font-semibold hover:bg-error-50 hover:border-error-300 transition-all duration-200"
                    onClick={() => setSkills((prev) => prev.filter((_, itemIndex) => itemIndex !== index))}
                  >
                    Remove
                  </button>
                </div>
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
          Save Skills
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

export default SkillsAdminPage;
