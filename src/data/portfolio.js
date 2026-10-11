// Single source of truth for everything the site displays.
// Edit content here — components only handle presentation.
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

export const profile = {
  name: "Kannan M",
  role: "Software Developer",
  roles: [
    "Software Developer",
    "Python & Full Stack Developer",
  ],
  heroDescription:
    "I build scalable web applications, automate complex document workflows, and turn ideas into dependable, real-world software.",
  aboutDescription:
    "A passionate learner, constantly exploring better ways to solve problems with code. I enjoy turning messy, manual processes into clean, automated systems — and building interfaces that make them a pleasure to use.",
  tagline: "Building solutions, learning every day, and turning ideas into real-world applications.",
  quote: "Turning ideas into real-world solutions through code.",
  email: "kannanmuruganandham1@gmail.com",
  phone: "+916382511495",
  phoneDisplay: "+91 63825 11495",
  location: "Bangalore, India",
  dob: "September 24, 2004",
  availability: "Open to opportunities",
  // Set to true to show the "Open to opportunities" badge, avatar dot, and status lines.
  showAvailability: false,
  education: "B.E. Computer Science",
  company: "NuWare Systems",
  github: "https://github.com/Kannan-24",
  githubHandle: "Kannan-24",
  linkedin: "https://linkedin.com/in/m-kannan-",
  resume: "/Kannan_Resume.pdf",
  resumeFileName: "Kannan_Resume.pdf",
  site: "https://kannan-24.netlify.app",
};

export const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Project Inquiry / Collaboration"
)}&body=${encodeURIComponent(
  "Hi Kannan,\n\nI came across your portfolio and would like to connect regarding a project / opportunity.\n\nBest regards,\n"
)}`;

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

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
        text: "Developed and enhanced automated extraction and verification pipelines for Dental and Professional insurance claims covering file loading, PDF splitting, validation, and SQL Server storage.",
      },
      {
        title: "AG Version Tool",
        text: "Independently developed the AG Version Tool to manage extraction versions, prevent duplicate processing, and maintain complete audit history.",
      },
      {
        title: "Claim Verification Tool",
        text: "Built full-stack verification functionality allowing operators to inspect source documents alongside extracted data, manage claim queues, edit field values, and update service lines.",
      },
      {
        title: "Document OCR & Automation",
        text: "Integrated AWS Textract with Tesseract OCR as fallback, engineered split-file origin mapping for traceability, and automated file movement and CSV exports.",
      },
      {
        title: "RAT Enterprise Application",
        text: "Built a configuration-driven Dynamic Quality Measures section, optimized Coder Dashboard queries, organized audit logging, and supported deployment activities.",
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

export const projectCategories = [
  "All",
  "Enterprise Solutions",
  "Full-Stack & Web Apps",
  "Academic & Awards",
];

export const projects = [
  {
    title: "AG Claims Processing Platform",
    subtitle: "Extraction & Verification",
    category: "Enterprise Solutions",
    fileName: "ag_claims_processing.md",
    text: "Developed and enhanced an end-to-end claims processing workflow for Dental and Professional insurance claims, covering document extraction, database storage, verification, and file processing. Implemented automated document processing including file loading, PDF splitting, extraction, validation, version tracking, and SQL Server storage.",
    highlights: [
      "Integrated AWS Textract as primary OCR engine with Tesseract OCR fallback.",
      "Independently engineered the AG Version Tool to prevent duplicate processing and maintain audit history.",
      "Implemented split-file origin mapping ensuring full traceability between source and claim documents.",
      "Enhanced verification workflow with claim assignment, queue management, field editing, and CSV export.",
    ],
    workflow: [
      "Source Documents", "File Loading", "PDF Split", "OCR Extraction",
      "Validation", "SQL Server", "Verification", "Export",
    ],
    tags: ["Python", "Streamlit", "Flask", "AWS Textract", "SQL Server", "PDF Processing", "JavaScript"],
  },
  {
    title: "RAT — Dynamic Quality Measures",
    subtitle: "Healthcare enterprise application",
    category: "Enterprise Solutions",
    fileName: "rat_quality_measures.md",
    text: "Engineered a dynamic Quality Measures section supporting multiple healthcare measures and services using a configuration-driven approach, drastically reducing repeated hard-coded development. Optimized Coder Dashboard & Review queries and enhanced activity tracking.",
    highlights: [
      "Architected a configuration-driven design for dynamic measures and services.",
      "Enhanced Coder Dashboard and Coder Review functionality with query performance optimizations.",
      "Added and enhanced critical fields in Member Chart based on clinical application requirements.",
      "Organized and improved audit-log functionality for end-to-end activity tracking and compliance.",
    ],
    tags: ["React", "Python", "SQL", "API Integration", "Audit Logging"],
  },
  {
    title: "Claim Extraction & Verification",
    subtitle: "Dental & Professional claims",
    category: "Enterprise Solutions",
    fileName: "claim_extraction_verification.md",
    text: "Comprehensive claim extraction and verification pipeline handling source documents, split claim files, and traceability. Created an interactive verification UI displaying source documents alongside extracted data for review and correction.",
    highlights: [
      "Built an interactive verification UI to view source documents alongside extracted claim data.",
      "Claim queue management, assignment, field-level editing, service-line updates, and status tracking.",
      "Automated file movement based on validation and verification outcomes.",
      "Comprehensive processing logs, left-out / unprocessed file recovery, and version tracking.",
    ],
    workflow: [
      "Source Documents", "File Processing", "PDF Splitting", "OCR Extraction",
      "Validation", "SQL Server", "Claim Verification", "Export",
    ],
    tags: ["Python", "Flask", "Streamlit", "AWS Textract", "Tesseract OCR", "SQL Server", "PDF/TIFF"],
  },
  {
    title: "CO-PO Attainment Tracking Tool",
    subtitle: "Institutional award, 2024–25",
    category: "Academic & Awards",
    fileName: "co_po_attainment.md",
    text: "Developed an institutional software application to automate the computation and tracking of Course Outcome–Program Outcome (CO–PO) attainment for engineering curricula. Recognized with an institutional award for this software during the 2024–2025 academic year.",
    highlights: [
      "Automates complex attainment mapping and analysis.",
      "Generates accreditation-ready reports, reducing faculty manual preparation by over 80%.",
      "Official Certificate of Recognition awarded by Erode Sengunthar Engineering College.",
    ],
    tags: ["Laravel", "Database", "Analytics", "Automation", "Reporting"],
  },
  {
    title: "Automated Transport Management System",
    subtitle: "Campus transport, live tracking",
    category: "Full-Stack & Web Apps",
    fileName: "atms.md",
    text: "Developed a web-based solution to streamline campus transportation. Integrated live tracking, attendance monitoring, and automated reporting to reduce errors and improve operational efficiency.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Live Tracking"],
    githubLink: "https://github.com/Kannan-24/atms",
  },
  {
    title: "Invoice Management System",
    subtitle: "GST-compliant billing",
    category: "Full-Stack & Web Apps",
    fileName: "invoice_management.md",
    text: "Built a comprehensive tool to create, manage, and track GST-compliant invoices. Automated payment reminders and financial reporting to enhance billing accuracy and efficiency.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "GST Invoicing"],
    githubLink: "https://github.com/Kannan-24/ims",
  },
  {
    title: "Spotify Clone",
    subtitle: "Music streaming UI",
    category: "Full-Stack & Web Apps",
    fileName: "spotify_clone.md",
    text: "Designed and implemented a responsive Spotify-inspired UI using React.js. Built dynamic pages for playlists and music categories with reusable components and modern design practices.",
    tags: ["React", "HTML", "CSS", "UI/UX"],
    githubLink: "https://github.com/Kannan-24/music-player",
    externalLink: "https://kannanmp.netlify.app",
  },
];

export const marquee = [
  "Python", "React", "Flask", "FastAPI", "AWS Textract", "SQL Server",
  "Node.js", "Docker", "Tesseract OCR", "Streamlit", "Laravel", "Git",
];
