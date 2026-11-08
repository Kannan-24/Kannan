import { FaArrowRight, FaCopy, FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { mailtoLink, profile, sectionNumber, whatsappLink } from "../data/portfolio";
import { copyText } from "../lib/utils";
import ContactForm from "./ContactForm";
import SectionHeading from "./ui/SectionHeading";
import Window from "./ui/Window";
import "./Contact.css";

// Let long addresses break after the "@" instead of mid-word.
const [emailUser, emailDomain] = profile.email.split("@");
const emailDisplay = (
  <>
    {emailUser}@<wbr />
    {emailDomain}
  </>
);

const channels = [
  { icon: FaEnvelope, label: "Email", value: emailDisplay, href: mailtoLink, copy: profile.email },
  ...(profile.whatsapp
    ? [{ icon: FaWhatsapp, label: "WhatsApp", value: "Chat with me", href: whatsappLink(), external: true }]
    : []),
  { icon: FaLinkedinIn, label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { icon: FaGithub, label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github, external: true },
];

const Contact = () => (
  <section id="contact" className="section cnt" aria-labelledby="contact-title">
    <div className="cnt-glow" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        id="contact-title"
        index={sectionNumber("contact")}
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
          <ContactForm />

          <aside className="cnt-aside" aria-labelledby="cnt-direct-title">
            <h3 className="cnt-aside-title" id="cnt-direct-title">Prefer a direct line?</h3>
            <ul className="cnt-channels">
              {channels.map(({ icon: Icon, label, value, href, external, copy }) => (
                <li key={label} className="cnt-channel-row">
                  <a
                    className="cnt-channel"
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className={`cnt-channel-icon is-${label.toLowerCase()}`}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="cnt-channel-text">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </span>
                    <FaArrowRight className="cnt-channel-go" aria-hidden="true" />
                  </a>
                  {copy && (
                    <button
                      type="button"
                      className="cnt-copy"
                      onClick={() => copyText(copy, "Email copied")}
                      aria-label="Copy email address"
                    >
                      <FaCopy aria-hidden="true" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Window>
    </div>
  </section>
);

export default Contact;
