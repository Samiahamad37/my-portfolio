export const siteConfig = {
  name: "Samia Adam Hamad",
  shortName: "Samia",
  initials: "SAH",
  title: "Backend-Focused Full-Stack Developer",
  tagline:
    "I design and build scalable backends, REST APIs, and data pipelines — turning complex requirements into reliable, production-ready systems.",
  email: "hamadsamia37@gmail.com",
  phone: "+255 714065166",
  location: "Dar es Salaam, Tanzania",
  availability: "Open to internships, freelance & full-time roles",
  social: {
    github: "https://github.com/Samiahamad37",
  },
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10+", label: "Projects built" },
  { value: "Final Year", label: "BSc at Ardhi University" },
  { value: "3", label: "Industry conferences attended" },
];

export const skills = [
  {
    category: "Backend",
    items: ["Django", "DRF", "PHP", "Node.js", "Go", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "InfluxDB", "Data Pipelines", "API Integration"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "Docker", "Project Management"],
  },
];

export const projects = [
  {
    title: "Air Quality Monitoring System",
    role: "Backend Developer",
    description:
      "IoT platform for real-time air quality tracking in Dar es Salaam — sensor data ingestion, REST APIs, and live analytics dashboards.",
    highlights: [
      "Built REST APIs for device telemetry and dashboard data",
      "Designed data pipelines for sensor ingestion into InfluxDB",
      "Supported real-time monitoring and historical trend analysis",
    ],
    tags: ["Django", "InfluxDB", "IoT", "REST APIs"],
    image: "/projects/air-quality.jpg",
    liveUrl: "https://airquality.tlms.live/",
    githubUrl: "",
  },
  {
    title: "Task Manager System",
    role: "Backend Developer",
    description:
      "Production-style task management backend with authentication, role-based access, and a fully documented REST API built on Django.",
    highlights: [
      "Implemented CRUD operations and user authentication",
      "Designed relational schema with PostgreSQL",
      "Exposed clean REST endpoints via Django REST Framework",
    ],
    tags: ["Django", "DRF", "PostgreSQL", "REST APIs"],
    image: "/projects/task-manager.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "TruthGuard AI",
    role: "Full-Stack Developer",
    description:
      "AI-powered misinformation detection platform that verifies text, URLs, and media — with trust scores, fact checks, evidence sources, and a full analysis dashboard.",
    highlights: [
      "Built Next.js API routes with PostgreSQL and Prisma for auth and analysis history",
      "Designed verify-content flows for text, URL, image, PDF, and video uploads",
      "Implemented dashboard, reports, notifications, and JWT-based authentication",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI", "Prisma"],
    image: "/projects/truthguard-ai.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Samiahamad37/Truthguard-AI",
  },
  {
    title: "CyberGuard AI Platform",
    role: "Full-Stack Developer",
    description:
      "AI-driven cybersecurity platform for threat detection, phishing analysis, and security monitoring — with real-time alerts, risk scoring, and an intelligent SOC-style dashboard.",
    highlights: [
      "Built threat detection flows for suspicious URLs, emails, and network activity",
      "Designed a security dashboard with live alerts, risk scores, and incident tracking",
      "Integrated AI-assisted analysis for proactive cyber defense and user notifications",
    ],
    tags: ["Next.js", "TypeScript", "AI", "Cybersecurity", "PostgreSQL"],
    image: "/projects/cyberguard-ai.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Restaurant Website",
    role: "Full-Stack Developer",
    description:
      "A responsive restaurant website showcasing menus, reservations, and services to enhance customer interactions and dining experiences.",
    highlights: [
      "Designed menu and reservation pages for easy browsing",
      "Built a mobile-friendly layout for customers on any device",
      "Focused on clear service presentation and contact flows",
    ],
    tags: ["HTML", "CSS", "PHP", "Responsive Design"],
    image: "/projects/restaurant.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Real Estate System",
    role: "Full-Stack Developer",
    description:
      "A property management platform for listings, client interactions, and transactions across buying, selling, and rental workflows.",
    highlights: [
      "Organized property listings with search-friendly structure",
      "Supported client inquiry and transaction tracking",
      "Streamlined rental and sales management flows",
    ],
    tags: ["PHP", "MySQL", "Web Development"],
    image: "/projects/realestate.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Budget Tracker",
    role: "Full-Stack Developer",
    description:
      "A personal finance app that helps users monitor income, expenses, and savings with a clear overview of financial activity.",
    highlights: [
      "Tracked income and expense categories over time",
      "Surfaced savings progress with simple summaries",
      "Designed an intuitive dashboard for daily use",
    ],
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/projects/budget-tracker.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Hostel Management System",
    role: "Backend Developer",
    description:
      "A hostel management system automating room allocation, tenant records, and fee tracking while centralizing daily operations.",
    highlights: [
      "Automated room allocation and tenant record keeping",
      "Tracked fee payments and occupancy status",
      "Reduced manual errors through centralized workflows",
    ],
    tags: ["PHP", "MySQL", "System Design"],
    image: "/projects/hostel.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "E-Book Hub",
    role: "Full-Stack Developer",
    description:
      "An online bookstore where customers can browse, order, and purchase digital and physical books through a simple catalog experience.",
    highlights: [
      "Built a browsable book catalog with category filters",
      "Supported order placement and purchase flows",
      "Designed a clean storefront for book discovery",
    ],
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/projects/ebook.jpg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Family Tree Management",
    role: "Full-Stack Developer",
    description:
      "A genealogy management app for tracking ancestry, family relationships, and historical records across generations.",
    highlights: [
      "Mapped family relationships across multiple generations",
      "Stored and organized historical family records",
      "Presented lineage data in an easy-to-navigate view",
    ],
    tags: ["PHP", "MySQL", "Web Development"],
    image: "/projects/family-tree.jpg",
    liveUrl: "",
    githubUrl: "",
  },
];

export const education = [
  {
    degree: "BSc Information Systems Management",
    institution: "Ardhi University",
    period: "Final Year",
    description:
      "Coursework in software engineering, database systems, information systems design, and enterprise application development.",
  },
];

export const conferences = [
  {
    name: "DjangoCon Arusha 2025",
    year: "2025",
    description: "Django best practices, scalable architecture, and the East African Python community.",
  },
  {
    name: "BIP — Blended Intensive Programme",
    year: "2026",
    description: "International academic collaboration, cross-cultural teamwork, and agile project delivery.",
  },
  {
    name: "EnhanceMind — Women in AI",
    year: "2026",
    description: "AI trends, ethical considerations, and pathways for women in technology leadership.",
  },
];

export const aboutSummary = [
  "I'm a backend-focused full-stack developer specializing in Django, Node.js, Go, and data-driven systems. I build APIs, data pipelines, and backend services that are structured for growth and easy to maintain.",
  "From IoT monitoring platforms to REST-powered web apps, I focus on clean architecture, solid database design, and shipping software that solves real problems — not just demos.",
];
