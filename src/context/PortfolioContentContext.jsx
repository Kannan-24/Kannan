import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import seedContent from "../data/portfolioContent.json";
import { apiRequest, withAuthHeader } from "../utils/api";

const PortfolioContentContext = createContext(null);

const defaultContent = {
  hero: {
    greeting: "Hi, I'm",
    name: "",
    description: "",
    ctaText: "Let's Connect",
    roles: [],
  },
  skills: [],
  projects: [],
  experiences: [],
};

const normalizeContent = (input) => {
  const candidate = input && typeof input === "object" ? input : {};

  return {
    hero: {
      ...defaultContent.hero,
      ...(candidate.hero || {}),
      roles: Array.isArray(candidate.hero?.roles)
        ? candidate.hero.roles.map((role) => String(role || "")).filter(Boolean)
        : [],
    },
    skills: Array.isArray(candidate.skills)
      ? candidate.skills
          .map((skill) => ({
            label: String(skill?.label || "").trim(),
            iconKey: String(skill?.iconKey || "").trim(),
          }))
          .filter((skill) => skill.label)
      : [],
    projects: Array.isArray(candidate.projects)
      ? candidate.projects.map((project) => ({
          title: String(project?.title || ""),
          text: String(project?.text || ""),
          tags: Array.isArray(project?.tags)
            ? project.tags.map((tag) => String(tag || "")).filter(Boolean)
            : [],
          githubLink: String(project?.githubLink || ""),
          externalLink: String(project?.externalLink || ""),
        }))
      : [],
    experiences: Array.isArray(candidate.experiences)
      ? candidate.experiences.map((experience) => ({
          company: String(experience?.company || ""),
          role: String(experience?.role || ""),
          period: String(experience?.period || ""),
          location: String(experience?.location || ""),
          summary: String(experience?.summary || ""),
        }))
      : [],
  };
};

export const PortfolioContentProvider = ({ children }) => {
  const [content, setContent] = useState(normalizeContent(seedContent));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshContent = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/content");
      setContent(normalizeContent(response.content));
      setError("");
    } catch (fetchError) {
      setError(fetchError.message || "Failed to fetch content");
      setContent(normalizeContent(seedContent));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  const updateSection = async (section, data, token) => {
    await apiRequest(`/admin/content/${section}`, {
      method: "PUT",
      headers: withAuthHeader(token),
      body: JSON.stringify({ data }),
    });

    setContent((previous) => normalizeContent({ ...previous, [section]: data }));
  };

  const value = useMemo(
    () => ({
      content,
      loading,
      error,
      refreshContent,
      updateSection,
    }),
    [content, loading, error]
  );

  return (
    <PortfolioContentContext.Provider value={value}>
      {children}
    </PortfolioContentContext.Provider>
  );
};

export const usePortfolioContent = () => {
  const context = useContext(PortfolioContentContext);
  if (!context) {
    throw new Error("usePortfolioContent must be used within a PortfolioContentProvider");
  }
  return context;
};
