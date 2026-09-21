import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { colors } = useTheme();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const contactApiUrl = apiBaseUrl ? `${apiBaseUrl.replace(/\/$/, "")}/send-email` : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!apiBaseUrl) {
      toast.success("Thank you for reaching out! (Demo Submission Mode)", {
        position: "top-right",
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-5 position-relative" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <div className="section-title-tag">
            <i className="bi bi-envelope-fill"></i> GET IN TOUCH
          </div>
          <h2 className="section-title-heading">
            Contact Me
          </h2>
          <p className="small mt-2" style={{ color: colors.textSecondary, maxWidth: "600px" }}>
            Feel free to reach out for technical discussions, collaboration, or engineering inquiries.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Info Card */}
          <div className="col-lg-5">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold text-white mb-3 fs-4">
                  Let's Connect
                </h3>
                <p className="small mb-4" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                  I am always open to discussing full-stack development, Python automation projects, or database and API implementations.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <a href="mailto:kannanmuruganandham1@gmail.com" className="social-icon-btn">
                      <i className="bi bi-envelope-fill fs-5" style={{ color: colors.accent }}></i>
                    </a>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>DIRECT EMAIL</div>
                      <a href="mailto:kannanmuruganandham1@gmail.com" className="text-white small fw-semibold text-decoration-none">
                        kannanmuruganandham1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <a href="https://github.com/Kannan-24" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                      <i className="bi bi-github fs-5"></i>
                    </a>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>GITHUB PROFILE</div>
                      <a href="https://github.com/Kannan-24" target="_blank" rel="noopener noreferrer" className="text-white small fw-semibold text-decoration-none">
                        github.com/Kannan-24
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <a href="https://linkedin.com/in/m-kannan-/" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>LINKEDIN</div>
                      <a href="https://linkedin.com/in/m-kannan-/" target="_blank" rel="noopener noreferrer" className="text-white small fw-semibold text-decoration-none">
                        linkedin.com/in/m-kannan-
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="social-icon-btn">
                      <i className="bi bi-geo-alt-fill fs-5" style={{ color: colors.accent }}></i>
                    </div>
                    <div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>LOCATION</div>
                      <span className="text-white small fw-semibold">Bangalore, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-3" style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(56, 189, 248, 0.1)" }}>
                <span className="text-white small fw-semibold">Software Developer | Full-Stack & Python Automation</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form Card */}
          <div className="col-lg-7">
            <div className="cyber-card p-4 p-md-5 h-100 cyber-card-glow">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small text-muted font-monospace">YOUR NAME</label>
                    <input
                      type="text"
                      className="form-control text-white border-secondary p-3 rounded-3"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      style={{ background: "#0d1527", borderColor: "rgba(56, 189, 248, 0.2)", color: "#fff" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-muted font-monospace">YOUR EMAIL</label>
                    <input
                      type="email"
                      className="form-control text-white border-secondary p-3 rounded-3"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      style={{ background: "#0d1527", borderColor: "rgba(56, 189, 248, 0.2)", color: "#fff" }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small text-muted font-monospace">SUBJECT</label>
                    <input
                      type="text"
                      className="form-control text-white border-secondary p-3 rounded-3"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry / Engineering Topic"
                      required
                      style={{ background: "#0d1527", borderColor: "rgba(56, 189, 248, 0.2)", color: "#fff" }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small text-muted font-monospace">MESSAGE</label>
                    <textarea
                      className="form-control text-white border-secondary p-3 rounded-3"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      style={{ background: "#0d1527", borderColor: "rgba(56, 189, 248, 0.2)", color: "#fff" }}
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn-cyber-primary w-100 py-3 text-center text-decoration-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <i className="bi bi-send-fill ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
