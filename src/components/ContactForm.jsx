import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaChevronDown, FaExclamationTriangle, FaPaperPlane, FaRedo } from "react-icons/fa";
import { profile, whatsappLink } from "../data/portfolio";

// Netlify Forms: Netlify finds this form in the pre-rendered HTML at deploy time
// (data-netlify="true" + the hidden "form-name" field) and stores submissions
// under Site → Forms. With JavaScript we POST it in the background and show
// the result inline; without JavaScript it submits normally.
const FORM_NAME = "contact";

const encode = (form) => new URLSearchParams(new FormData(form)).toString();

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(form),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="cf-success" role="status">
        <FaCheckCircle className="cf-success-icon" aria-hidden="true" />
        <h3 className="cf-success-title" tabIndex={-1} ref={successRef}>
          Thanks, your message is on its way!
        </h3>
        <p>
          I&apos;ll get back to you {profile.responseTime}. If it&apos;s urgent, email me at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          <FaRedo aria-hidden="true" /> Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";
  const whatsapp = whatsappLink();

  return (
    <form
      className="cf"
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Spam trap: hidden from people, bots fill it in and get discarded. */}
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="cf-grid">
        <div className="cf-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={100} />
        </div>

        <div className="cf-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={200} />
        </div>

        <div className="cf-field">
          <label htmlFor="cf-type">Project type</label>
          <div className="cf-select">
            <select id="cf-type" name="project-type" required defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              {profile.projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <FaChevronDown aria-hidden="true" />
          </div>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-budget">
            Budget range <span className="cf-optional">(optional)</span>
          </label>
          <div className="cf-select">
            <select id="cf-budget" name="budget" defaultValue="">
              <option value="">Select a range…</option>
              {profile.budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            <FaChevronDown aria-hidden="true" />
          </div>
        </div>

        <div className="cf-field cf-field-full">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            maxLength={5000}
            placeholder="What do you need built, and what problem should it solve?"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="cf-error" role="alert">
          <FaExclamationTriangle aria-hidden="true" />
          <span>
            Sorry, your message couldn&apos;t be sent. Please try again, or email me at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {whatsapp && (
              <>
                {" "}or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">message me on WhatsApp</a>
              </>
            )}
            .
            {import.meta.env.DEV && (
              <small className="cf-dev-note">
                Local dev only: this is expected. Netlify Forms only accept submissions on the
                deployed Netlify site, not on <code>npm run dev</code> / <code>preview</code>.
              </small>
            )}
          </span>
        </p>
      )}

      <div className="cf-submit">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          <FaPaperPlane aria-hidden="true" />
          {sending ? "Sending…" : "Send message"}
        </button>
        <p className="cf-hint">I reply {profile.responseTime}.</p>
      </div>
    </form>
  );
};

export default ContactForm;
