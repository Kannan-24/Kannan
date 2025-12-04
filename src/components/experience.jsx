import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { colors } = useTheme();
  
  // Calculate experience duration
  const startDate = new Date("2025-10-06"); 
  const currentDate = new Date();
  
  const calculateExperience = () => {
    const diffTime = Math.abs(currentDate - startDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
    return `${months} month${months !== 1 ? 's' : ''}`;
  };
  
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold mb-3" style={{ color: colors.text }}>
            Professional Experience
          </h2>
          <p style={{ color: colors.textSecondary, maxWidth: "600px", margin: "0 auto" }}>
            A quick overview of my professional journey and contributions.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="experience-timeline">
              <ul className="timeline list-unstyled">

                {/* Experience Item */}
                <li className="experience-item">
                  <div className="experience-content shadow-sm">
                    <h5 className="role-title">NuWare Systems LLP</h5>
                    <h6 className="role-subtitle">Trainee Software Engineer</h6>

                    <div className="meta-info">
                      <p>
                        <FaCalendarAlt className="me-2 icon" />
                        October 2025 - Present ({calculateExperience()})
                      </p>
                      <p>
                        <FaMapMarkerAlt className="me-2 icon" />
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .experience-timeline {
          position: relative;
        }

        /* Timeline Line */
        .timeline {
          position: relative;
          margin-left: 25px;
        }

        .timeline:before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0;
          width: 2px;
          height: 100%;
          background: ${colors.accent}66;
        }

        /* Experience Item */
        .experience-item {
          position: relative;
          padding-left: 40px;
          margin-bottom: 30px;
          transition: transform 0.3s ease;
        }

        .experience-item:hover {
          transform: translateY(-4px);
        }

        /* Circle Marker */
        .experience-item:before {
          content: "";
          position: absolute;
          left: -1px;
          top: 5px;
          width: 12px;
          height: 12px;
          background-color: ${colors.accent};
          border-radius: 50%;
          box-shadow: 0 0 0 5px ${colors.accent}26;
        }

        /* Content Card */
        .experience-content {
          background: ${colors.cardBg};
          padding: 15px 20px;
          border-radius: 8px;
          border: 1px solid ${colors.border};
          backdrop-filter: blur(6px);
          transition: background 0.3s ease, border 0.3s ease;
        }

        .experience-content:hover {
          background: ${colors.cardBg};
          border-color: ${colors.accent}66;
        }

        .role-title {
          color: ${colors.accent};
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .role-subtitle {
          color: ${colors.text};
          font-weight: 500;
          margin-bottom: 12px;
          font-size: 1rem;
        }

        .meta-info p {
          color: ${colors.textSecondary};
          margin: 3px 0;
          font-size: 0.95rem;
        }

        .icon {
          color: ${colors.accent};
        }

        @media (max-width: 768px) {
          .experience-item {
            padding-left: 25px;
          }

          .role-title {
            font-size: 1.05rem;
          }

          .role-subtitle,
          .meta-info p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
