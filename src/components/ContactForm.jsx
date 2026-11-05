import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaChevronDown, FaExclamationTriangle, FaPaperPlane, FaRedo } from "react-icons/fa";
import { profile, whatsappLink } from "../data/portfolio";

// The form posts to the contact API on invoice-vm (contact-api/ in this repo),
// which emails each enquiry to you. With JavaScript we send it in the background
// and show the result inline; without JavaScript the browser posts it directly
// and the API answers with a small "Message sent" page.
const ENDPOINT = profile.contactEndpoint;

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorText, setErrorText] = useState("");
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorText("");
    try {
      // URLSearchParams body = a "simple" CORS request (no preflight needed).
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(new FormData(form)),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        // Show the API's reason for problems the visitor can fix (400) or wait out (429).
        if (response.status === 400 || response.status === 429) setErrorText(result.error ?? "");
        throw new Error(result.error || `Contact form request failed: ${response.status}`);
      }
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
    <form className="cf" name="contact" method="POST" action={ENDPOINT} onSubmit={onSubmit}>
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
            {errorText
              ? `${errorText} You can also email me at `
              : "Sorry, your message couldn't be sent. Please try again, or email me at "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {whatsapp && (
              <>
                {" "}or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">message me on WhatsApp</a>
              </>
            )}
            .
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
