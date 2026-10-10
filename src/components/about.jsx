import React from "react";
import Image from "../assets/Kannan.png";
import { useTheme } from "../context/ThemeContext";
import {
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaBullseye,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaQuoteLeft,
  FaTerminal,
} from "react-icons/fa";

const About = () => {
  const { colors } = useTheme();

  const accentColor = colors?.accent || "#3eedb7";
  const textColor = colors?.text || "#ffffff";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .about-section {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .about-grid-container {
          max-width: 1300px;
          width: 100%;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: stretch;
        }

        @media (max-width: 991px) {
          .about-grid-container {
            grid-template-columns: 1fr;
          }
        }

        /* Profile Left Card */
        .profile-card {
          background: #091218;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.7);
        }

        .avatar-wrapper {
          position: relative;
          margin-bottom: 24px;
        }

        .avatar-ring {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 3px solid;
          padding: 4px;
          box-shadow: 0 0 25px rgba(62, 237, 183, 0.25);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          background: #0f172a;
        }

        .online-badge {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
          right: 12px;
          bottom: 12px;
          border: 3px solid #091218;
        }

        .profile-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .profile-role {
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          color: #64748b;
          margin: 6px 0 16px 0;
          font-weight: 600;
        }

        .profile-tagline {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .profile-socials {
          display: flex;
          gap: 16px;
          margin-bottom: 28px;
        }

        .social-icon-btn {
          color: #94a3b8;
          font-size: 1.1rem;
          transition: color 0.2s, transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon-btn:hover {
          color: #3eedb7;
          transform: translateY(-2px);
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          max-width: 220px;
          padding: 10px 20px;
          border: 1.5px solid;
          border-radius: 30px;
          background: transparent;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .resume-btn:hover {
          background: rgba(62, 237, 183, 0.1);
        }

        /* Right Bento Details */
        .details-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .details-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          flex-wrap: wrap;
        }

        .eyebrow-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .eyebrow-dash {
          width: 24px;
          height: 2px;
          display: inline-block;
        }

        .eyebrow-text {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: #64748b;
        }

        .main-heading {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .main-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.7;
          max-width: 540px;
          margin: 0;
        }

        /* Terminal Loop Badge */
        .dev-badge-box {
          background: rgba(14, 23, 36, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 14px 18px;
          font-family: 'Fira Code', monospace;
          box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.5);
          flex-shrink: 0;
          min-width: 190px;
        }

        .dev-badge-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .dot-red { width: 8px; height: 8px; border-radius: 50%; background: #ef4444; }
        .dot-yellow { width: 8px; height: 8px; border-radius: 50%; background: #eab308; }
        .dot-green { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }

        .dev-badge-title {
          font-size: 0.68rem;
          color: #64748b;
          margin-left: 4px;
          letter-spacing: 0.05em;
        }

        .dev-loop-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 0.78rem;
        }

        .loop-step {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
        }

        .loop-step.active {
          color: #f1f5f9;
          font-weight: 500;
        }

        .loop-arrow {
          font-size: 0.7rem;
        }

        /* Info Bento Card */
        .info-bento-card {
          background: #091218;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 20px;
          column-gap: 36px;
        }

        @media (max-width: 600px) {
          .info-bento-card {
            grid-template-columns: 1fr;
          }
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .info-icon-box {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.75rem;
          color: #64748b;
          display: block;
        }

        .info-value {
          font-size: 0.88rem;
          font-weight: 500;
          margin: 2px 0 0 0;
        }

        .info-value.link {
          text-decoration: none;
        }

        .info-value.link:hover {
          text-decoration: underline;
        }

        /* 4 Metrics */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        @media (max-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-card {
          background: #091218;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 18px 14px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          font-size: 1.35rem;
          margin-bottom: 8px;
        }

        .stat-title {
          font-size: 0.92rem;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .stat-subtitle {
          font-size: 0.72rem;
          color: #64748b;
        }

        /* Bottom Quote */
        .quote-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.82rem;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .quote-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quote-icon {
          color: #38bdf8;
          font-size: 1rem;
        }

        .quote-text {
          font-style: italic;
        }

        .quote-author {
          color: #64748b;
          font-size: 0.78rem;
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-grid-container">
          
          {/* Left Profile Card */}
          <div className="profile-card">
            <div className="avatar-wrapper">
              <div className="avatar-ring" style={{ borderColor: accentColor }}>
                <img src={Image} alt="Kannan M" className="profile-img" />
              </div>
              <span className="online-badge" style={{ backgroundColor: accentColor }} />
            </div>

            <h3 className="profile-name" style={{ color: textColor }}>
              Kannan M
            </h3>
            <p className="profile-role">SOFTWARE DEVELOPER</p>

            <p className="profile-tagline">
              Building solutions, learning every day, and turning ideas into real
              world applications.
            </p>

            <div className="profile-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:kannanmuruganandham1@gmail.com" className="social-icon-btn">
                <FaEnvelope />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              <FaDownload style={{ marginRight: "6px" }} /> Download Resume
            </a>
          </div>

          {/* Right Details Bento */}
          <div className="details-column">
            
            {/* Header & Developer Terminal Loop Badge */}
            <div className="details-header-row">
              <div>
                <div className="eyebrow-wrapper">
                  <span className="eyebrow-dash" style={{ backgroundColor: accentColor }} />
                  <span className="eyebrow-text">GET TO KNOW ME</span>
                </div>
                <h2 className="main-heading" style={{ color: textColor }}>
                  About Me
                </h2>
                <p className="main-desc">
                  A passionate learner, constantly exploring innovative solutions
                  in technology and web development. I believe in leveraging my
                  skills to create impactful and efficient digital experiences.
                </p>
              </div>

              {/* Modern Terminal Mini-Card */}
              <div className="dev-badge-box">
                <div className="dev-badge-header">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                  <span className="dev-badge-title">workflow.sh</span>
                </div>
                <div className="dev-loop-list">
                  <div className="loop-step">
                    <span className="loop-arrow" style={{ color: accentColor }}>▸</span>
                    <span>code()</span>
                  </div>
                  <div className="loop-step">
                    <span className="loop-arrow" style={{ color: accentColor }}>▸</span>
                    <span>learn()</span>
                  </div>
                  <div className="loop-step">
                    <span className="loop-arrow" style={{ color: accentColor }}>▸</span>
                    <span>build()</span>
                  </div>
                  <div className="loop-step active" style={{ color: accentColor }}>
                    <span className="loop-arrow">↺</span>
                    <span>repeat()</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Details Bento */}
            <div className="info-bento-card">
              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaUser />
                </div>
                <div>
                  <span className="info-label">Name</span>
                  <p className="info-value" style={{ color: textColor }}>Kannan M</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="info-label">Phone</span>
                  <a href="tel:+916382511495" className="info-value link" style={{ color: textColor }}>
                    +91-63825-11495
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaCalendarAlt />
                </div>
                <div>
                  <span className="info-label">Date of Birth</span>
                  <p className="info-value" style={{ color: textColor }}>September 24, 2004</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="info-label">Address</span>
                  <p className="info-value" style={{ color: textColor }}>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaEnvelope />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <a href="mailto:kannanmuruganandham1@gmail.com" className="info-value link" style={{ color: textColor }}>
                    kannanmuruganandham1@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box" style={{ color: accentColor }}>
                  <FaBriefcase />
                </div>
                <div>
                  <span className="info-label">Availability</span>
                  <p className="info-value" style={{ color: textColor }}>Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* 4 Feature Stats */}
            <div className="stats-row">
              <div className="stat-card">
                <FaGraduationCap className="stat-icon" style={{ color: "#2dd4bf" }} />
                <h4 className="stat-title" style={{ color: textColor }}>B.E CSE</h4>
                <span className="stat-subtitle">Education</span>
              </div>

              <div className="stat-card">
                <FaCode className="stat-icon" style={{ color: "#38bdf8" }} />
                <h4 className="stat-title" style={{ color: textColor }}>1+ Years</h4>
                <span className="stat-subtitle">Experience</span>
              </div>

              <div className="stat-card">
                <FaLightbulb className="stat-icon" style={{ color: "#c084fc" }} />
                <h4 className="stat-title" style={{ color: textColor }}>Always</h4>
                <span className="stat-subtitle">Learning</span>
              </div>

              <div className="stat-card">
                <FaBullseye className="stat-icon" style={{ color: "#fb923c" }} />
                <h4 className="stat-title" style={{ color: textColor }}>Goal</h4>
                <span className="stat-subtitle">Build Impactful Products</span>
              </div>
            </div>

            {/* Bottom Quote Bar */}
            <div className="quote-bar">
              <div className="quote-content">
                <FaQuoteLeft className="quote-icon" />
                <span className="quote-text">
                  "Turning ideas into real-world solutions through code."
                </span>
              </div>
              <span className="quote-author">— Kannan M</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;