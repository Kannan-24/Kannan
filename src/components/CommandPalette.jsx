import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowRight, FaCopy, FaDownload, FaEnvelope, FaExternalLinkAlt, FaGithub,
  FaHashtag, FaLinkedinIn, FaMoon, FaSearch, FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/theme";
import { mailtoLink, profile, sections } from "../data/portfolio";
import { copyText } from "../lib/utils";
import "./CommandPalette.css";

const openUrl = (url) => window.open(url, "_blank", "noopener,noreferrer");

const CommandPalette = ({ open, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const restoreFocus = useRef(null);

  const commands = useMemo(
    () => [
      ...sections.map((s) => ({
        id: `go-${s.id}`,
        group: "Navigate",
        label: `Go to ${s.label}`,
        icon: FaHashtag,
        run: () => document.getElementById(s.id)?.scrollIntoView(),
      })),
      { id: "copy-email", group: "Actions", label: "Copy email address", hint: profile.email, icon: FaCopy, run: () => copyText(profile.email, "Email copied") },
      { id: "send-email", group: "Actions", label: "Send an email", icon: FaEnvelope, run: () => { window.location.href = mailtoLink; } },
      { id: "open-resume", group: "Actions", label: "Open resume", icon: FaExternalLinkAlt, run: () => openUrl(profile.resume) },
      {
        id: "download-resume", group: "Actions", label: "Download resume", icon: FaDownload,
        run: () => {
          const a = document.createElement("a");
          a.href = profile.resume;
          a.download = profile.resumeFileName;
          a.click();
        },
      },
      { id: "theme", group: "Actions", label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`, icon: theme === "dark" ? FaSun : FaMoon, run: toggleTheme },
      { id: "github", group: "Links", label: "GitHub", hint: `@${profile.githubHandle}`, icon: FaGithub, run: () => openUrl(profile.github) },
      { id: "linkedin", group: "Links", label: "LinkedIn", icon: FaLinkedinIn, run: () => openUrl(profile.linkedin) },
    ],
    [theme, toggleTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint ?? ""}`.toLowerCase().includes(q));
  }, [commands, query]);

  // Reset + focus management on open/close.
  useEffect(() => {
    if (open) {
      restoreFocus.current = document.activeElement;
      setQuery("");
      setCursor(0);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      restoreFocus.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${cursor}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  if (!open) return null;

  const run = (command) => {
    onClose();
    // Let the dialog unmount (and focus restore) before acting.
    requestAnimationFrame(() => command.run());
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (filtered.length ? (c + 1) % filtered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (filtered.length ? (c - 1 + filtered.length) % filtered.length : 0));
    } else if (e.key === "Enter" && filtered[cursor]) {
      e.preventDefault();
      run(filtered[cursor]);
    } else if (e.key === "Tab") {
      // Keep focus inside the dialog.
      e.preventDefault();
    }
  };

  let lastGroup = null;

  return (
    <div className="cmdk-overlay" onMouseDown={onClose}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="cmdk-input-row">
          <FaSearch aria-hidden="true" />
          <input
            ref={inputRef}
            className="cmdk-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={filtered[cursor] ? `cmdk-${filtered[cursor].id}` : undefined}
            autoComplete="off"
            spellCheck="false"
          />
          <kbd>esc</kbd>
        </div>

        <ul className="cmdk-list" id="cmdk-list" role="listbox" ref={listRef}>
          {filtered.length === 0 && (
            <li className="cmdk-empty">
              No results for “{query}”
            </li>
          )}
          {filtered.map((command, index) => {
            const Icon = command.icon;
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            return (
              <li key={command.id} role="presentation">
                {showGroup && <div className="cmdk-group">{command.group}</div>}
                <div
                  id={`cmdk-${command.id}`}
                  role="option"
                  aria-selected={index === cursor}
                  data-index={index}
                  className={`cmdk-item ${index === cursor ? "is-active" : ""}`}
                  onMouseMove={() => setCursor(index)}
                  onClick={() => run(command)}
                >
                  <span className="cmdk-item-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="cmdk-item-label">{command.label}</span>
                  {command.hint && <span className="cmdk-item-hint">{command.hint}</span>}
                  <FaArrowRight className="cmdk-item-go" aria-hidden="true" />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="cmdk-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span className="cmdk-footer-brand">kannan@portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
