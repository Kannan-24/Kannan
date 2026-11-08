// Content for everything the site displays.
// Edit content here — components only handle presentation.
// Contact details, availability and SEO text live in src/config/site.js.
import {
  FaPython, FaJs, FaJava, FaLaravel, FaPhp, FaReact, FaHtml5, FaCss3Alt,
  FaBootstrap, FaFigma, FaDatabase, FaEye, FaFilePdf, FaGitAlt, FaGithub,
  FaCogs, FaLinux, FaCloud, FaRobot, FaBrain, FaCode, FaBug, FaVial,
  FaCheckDouble, FaPalette,
} from "react-icons/fa";
import {
  SiStreamlit, SiFlask, SiFastapi, SiDocker, SiAmazonwebservices, SiOpenai,
  SiNodedotjs,
} from "react-icons/si";
import { site } from "../config/site";

export { mailtoLink, whatsappLink } from "../config/site";

export const profile = {
  ...site,
  roles: ["Software Developer", "Python & Full Stack Developer"],
  heroDescription:
    "I build scalable web applications, automate complex document workflows, and turn ideas into dependable, real-world software.",
  aboutDescription:
    "A passionate learner, constantly exploring better ways to solve problems with code. I enjoy turning messy, manual processes into clean, automated systems — and building interfaces that make them a pleasure to use.",
  tagline: "Building solutions, learning every day, and turning ideas into real-world applications.",
  quote: "Turning ideas into real-world solutions through code.",
  dob: "September 24, 2004",
  education: "B.E. Computer Science",
  company: "NuWare Systems",
  resume: "/Kannan_Resume.pdf",
  resumeFileName: "Kannan_Resume.pdf",
};

// Page order. The navbar, command palette and the "01 //" section numbers
// all follow this list.
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

// "01", "02", … based on the order above (home is 00).
export const sectionNumber = (id) =>
  String(Math.max(sections.findIndex((s) => s.id === id), 0)).padStart(2, "0");

export const stats = [
  { value: "B.E CSE", label: "Education", tone: "teal" },
  { value: "1+ Years", label: "Experience", tone: "sky" },
  { value: "Always", label: "Learning", tone: "violet" },
  { value: "Goal", label: "Build impactful products", tone: "amber" },
];

export const experiences = [
  {
    company: "NuWare Systems LLP",
    role: "Software Developer Trainee",
    type: "Full-time",
    location: "Bangalore, India",
    period: "Oct 2025 — Present",
    current: true,
    path: "/work/enterprise-solutions",
    summary:
      "Core developer driving full-stack automation, document intelligence, and platform enhancements across production insurance claims processing and healthcare quality analytics applications.",
    contributions: [
      {
        title: "End-to-End Claims Processing",
        text: "Developed and enhanced automated extraction and verification pipelines for insurance claim documents, covering file loading, PDF splitting, validation, and SQL Server storage.",
      },
      {
        title: "Extraction Version Tracking",
        text: "Independently built a version-tracking tool that manages extraction versions, prevents duplicate processing, and keeps a complete audit history.",
      },
      {
        title: "Claim Verification UI",
        text: "Built full-stack verification functionality allowing operators to inspect source documents alongside extracted data, manage claim queues, edit field values, and update service lines.",
      },
      {
        title: "Document OCR & Automation",
        text: "Integrated AWS Textract with Tesseract OCR as fallback, engineered split-file origin mapping for traceability, and automated file movement and CSV exports.",
      },
      {
        title: "Healthcare Quality Analytics",
        text: "Built a configuration-driven quality-measures module, optimized dashboard queries, organized audit logging, and supported deployment activities.",
      },
    ],
    tech: [
      "Python", "React.js", "Streamlit", "Flask", "AWS Textract",
      "SQL Server", "Tesseract OCR", "Node.js", "Docker", "Git",
    ],
  },
];

export const skillCategories = [
  {
    key: "languages",
    label: "Languages & Backend",
    skills: [
      { label: "Python", icon: FaPython },
      { label: "Flask", icon: SiFlask },
      { label: "FastAPI", icon: SiFastapi },
      { label: "Streamlit", icon: SiStreamlit },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "JavaScript", icon: FaJs },
      { label: "Java", icon: FaJava },
      { label: "Laravel", icon: FaLaravel },
      { label: "PHP", icon: FaPhp },
    ],
  },
  {
    key: "frontend",
    label: "Frontend & UI",
    skills: [
      { label: "React.js", icon: FaReact },
      { label: "HTML5", icon: FaHtml5 },
      { label: "CSS3", icon: FaCss3Alt },
      { label: "Tailwind CSS", icon: FaPalette },
      { label: "Bootstrap", icon: FaBootstrap },
      { label: "Figma", icon: FaFigma },
    ],
  },
  {
    key: "data-ocr",
    label: "Databases & OCR",
    skills: [
      { label: "SQL Server", icon: FaDatabase },
      { label: "MySQL", icon: FaDatabase },
      { label: "AWS Textract", icon: SiAmazonwebservices },
      { label: "Tesseract OCR", icon: FaEye },
      { label: "PDF & Doc Processing", icon: FaFilePdf },
    ],
  },
  {
    key: "devops",
    label: "Cloud & DevOps",
    skills: [
      { label: "Docker", icon: SiDocker },
      { label: "AWS", icon: SiAmazonwebservices },
      { label: "Git", icon: FaGitAlt },
      { label: "GitHub Actions", icon: FaGithub },
      { label: "CI / CD", icon: FaCogs },
      { label: "Linux", icon: FaLinux },
      { label: "Netlify", icon: FaCloud },
    ],
  },
  {
    key: "ai-tools",
    label: "AI & Tools",
    skills: [
      { label: "Google Antigravity", icon: FaRobot },
      { label: "AI Code Generation", icon: FaBrain },
      { label: "Claude & ChatGPT", icon: SiOpenai },
      { label: "VS Code", icon: FaCode },
    ],
  },
  {
    key: "testing",
    label: "Testing & QA",
    skills: [
      { label: "Manual Testing", icon: FaBug },
      { label: "Functional Testing", icon: FaVial },
      { label: "QA Coordination", icon: FaCheckDouble },
    ],
  },
];

export const projectCategories = ["All", "Data & Automation", "Web Apps", "Websites & UI"];

// Case studies. Each card shows: problem → solution → result, tech tags, and
// Live demo / GitHub buttons (a button is hidden when its link is missing).
// `workProject: true` marks work done for an employer: keep those descriptions
// general (no client names, internal tool names, code or screenshots).
// TODO: replace qualitative results with real numbers wherever you have them
// (hours saved per week, documents processed per day, etc.).
export const projects = [
  {
    title: "Insurance Claims Document Automation",
    category: "Data & Automation",
    fileName: "claims_automation.md",
    workProject: true,
    problem:
      "Staff were typing data from large volumes of scanned claim forms (PDF/TIFF) into a database by hand.",
    solution:
      "An OCR pipeline that splits incoming PDFs, extracts fields with AWS Textract (Tesseract as fallback), validates them and stores them in SQL Server, plus a review screen that shows each source page beside its extracted data.",
    result:
      "Manual data entry replaced by an extract → validate → review flow, with version tracking that stops duplicate processing and every record traceable to its source page.",
    workflow: ["PDF in", "Split", "OCR", "Validate", "Database", "Review", "Export"],
    tags: ["Python", "Flask", "Streamlit", "AWS Textract", "Tesseract OCR", "SQL Server"],
  },
  {
    title: "Healthcare Quality Analytics Module",
    category: "Web Apps",
    fileName: "quality_measures.md",
    workProject: true,
    problem:
      "Every new healthcare quality measure needed its own hand-coded screens and logic, which slowed down releases.",
    solution:
      "A configuration-driven module where measures and services are defined as data, plus faster dashboard queries and organized audit logging.",
    result:
      "New measures are added through configuration instead of new code, with a full audit trail of user activity.",
    tags: ["React", "Python", "SQL", "REST APIs", "Audit Logging"],
  },
  {
    title: "CO-PO Attainment Tracking Tool",
    category: "Web Apps",
    fileName: "co_po_attainment.md",
    problem:
      "Faculty calculated course and programme outcome attainment for accreditation by hand in spreadsheets: slow and error-prone.",
    solution:
      "A web application that computes CO–PO attainment from assessment data and generates accreditation-ready reports.",
    result:
      "Cut manual report preparation by over 80% and received an institutional award (2024–25).",
    tags: ["Laravel", "MySQL", "Reporting", "Automation"],
  },
  {
    title: "Invoice Management System",
    category: "Web Apps",
    fileName: "invoice_management.md",
    problem:
      "Writing GST invoices manually and tracking payments from memory led to billing mistakes and late payments.",
    solution:
      "A billing app to create, manage and track GST-compliant invoices, with automated payment reminders and financial reports.",
    result: "More accurate billing, with reminders and reports generated automatically.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "GST Invoicing"],
    githubLink: "https://github.com/Kannan-24/ims",
  },
  {
    title: "Automated Transport Management System",
    category: "Web Apps",
    fileName: "atms.md",
    problem:
      "Campus bus attendance and routes were tracked manually, causing errors and giving staff little visibility.",
    solution: "A web platform with live bus tracking, attendance monitoring and automated reports.",
    result: "Fewer manual errors and real-time visibility of the transport fleet.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Live Tracking"],
    githubLink: "https://github.com/Kannan-24/atms",
  },
  {
    title: "Music Streaming UI (Spotify-inspired)",
    category: "Websites & UI",
    fileName: "music_player.md",
    problem:
      "Practice project: build a complex streaming-app interface that works on every screen size.",
    solution: "A responsive React interface with playlist and category pages built from reusable components.",
    result: "Responsive from mobile to desktop and deployed live on Netlify.",
    tags: ["React", "HTML", "CSS", "Responsive UI"],
    githubLink: "https://github.com/Kannan-24/music-player",
    liveLink: "https://kannanmp.netlify.app",
  },
];

export const marquee = [
  "Python", "React", "Flask", "FastAPI", "AWS Textract", "SQL Server",
  "Node.js", "Docker", "Tesseract OCR", "Streamlit", "Laravel", "Git",
];
