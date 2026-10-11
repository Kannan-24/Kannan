import { FaArrowRight, FaCopy, FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { mailtoLink, profile } from "../data/portfolio";
import { copyText } from "../lib/utils";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Contact.css";

const channels = [
  { icon: FaLinkedinIn, label: "LinkedIn", value: "in/m-kannan-", href: profile.linkedin, external: true },
  { icon: FaGithub, label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github, external: true },
  { icon: FaPhoneAlt, label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
];

const Contact = () => (
  <section id="contact" className="section cnt" aria-labelledby="contact-title">
    <div className="cnt-glow" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        id="contact-title"
        index="06"
        kicker="contact"
        title="Let's build"
        accent="something."
        lead="Have a project, a role, or just want to talk shop? My inbox is always open."
      />

      <Window title="ssh kannan@portfolio" meta="connected" className="cnt-window" bodyClassName="cnt-body" data-reveal>
        <div className="cnt-session" aria-hidden="true">
          <p className="prompt">
            <b>you@internet</b>:~$ ssh kannan@portfolio
          </p>
          <p className="cnt-ok">✓ Connection established.</p>
          {profile.showAvailability && (
            <p className="cnt-ok">✓ Status: {profile.availability.toLowerCase()}</p>
          )}
        </div>

        <div className="cnt-main">
          <div className="cnt-email">
            <span className="cnt-email-label">Drop me a line</span>
            <a className="cnt-email-link" href={mailtoLink}>
              {profile.email}
            </a>
            <div className="cnt-email-actions">
              <a className="btn btn-primary" href={mailtoLink}>
                <FaEnvelope aria-hidden="true" /> Send an email
              </a>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => copyText(profile.email, "Email copied")}
              >
                <FaCopy aria-hidden="true" /> Copy address
              </button>
            </div>
          </div>

          <ul className="cnt-channels">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  className="cnt-channel"
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <span className="cnt-channel-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="cnt-channel-text">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </span>
                  <FaArrowRight className="cnt-channel-go" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  </section>
);

export default Contact;
